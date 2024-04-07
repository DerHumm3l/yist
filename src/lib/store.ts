import lists from "@/data/lists.json";
import listItems from "@/data/listItems.json";
import { List } from "@/types/list";
import { ListItem } from "@/types/listItem";
import { create, StateCreator } from "zustand";

type ListsSlice = {
  lists: List[];
  addList: (list: List) => void;
  updateList: (list: List) => void;
  deleteList: (list: List) => void;
};

type ListItemsSlice = {
  listItems: ListItem[];
  addListItems: (...listItems: ListItem[]) => void;
};

type ListsStore = ListsSlice & ListItemsSlice;

const createListsSlice: StateCreator<ListsStore, [], [], ListsSlice> = (
  set
) => ({
  lists: lists ?? [],
  addList: (list) => set((state) => ({ lists: [list, ...state.lists] })),
  deleteList: (list) =>
    set((state) => ({ lists: state.lists.filter((x) => x.id !== list.id) })),
  updateList: (updatedList) =>
    set((state) => ({
      lists: state.lists.map((list) =>
        list.id !== updatedList.id ? list : updatedList
      ),
    })),
});

const createListItemsSlice: StateCreator<ListsStore, [], [], ListItemsSlice> = (
  set
) => ({
  addListItems: (...listItems) =>
    set((state) => ({ listItems: [...state.listItems, ...listItems] })),
  listItems: listItems ?? [],
});

export const useListsStore = create<ListsStore>()((...a) => ({
  ...createListsSlice(...a),
  ...createListItemsSlice(...a),
}));

export const listSelector =
  (id: string | undefined) => (state: ListsStore) => ({
    list: state.lists.find((x) => x.id === id),
    addList: state.addList,
    addListItems: state.addListItems,
    deleteList: state.deleteList,
    updateList: state.updateList,
  });

export const listItemsSelector =
  (listId: string | undefined) => (state: ListsStore) =>
    state.listItems.filter((x) => x.listId === listId);
