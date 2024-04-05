import lists from "@/data/lists.json";
import listItems from "@/data/listItems.json";
import { List } from "@/types/list";
import { ListItem } from "@/types/listItem";
import { create } from "zustand";

export type ListsStore = {
  lists: List[];
  listItems: ListItem[];
  addList: (list: List) => void;
  addListItems: (...listItems: ListItem[]) => void;
  deleteList: (list: List) => void;
};

export const useListsStore = create<ListsStore>()((set) => ({
  lists: lists ?? [],
  listItems: listItems ?? [],
  addList: (list) => set((state) => ({ lists: [list, ...state.lists] })),
  addListItems: (...listItems) =>
    set((state) => ({ listItems: [...state.listItems, ...listItems] })),
  deleteList: (list) =>
    set((state) => ({ lists: state.lists.filter((x) => x.id !== list.id) })),
}));

export const listSelector =
  (id: string | undefined) => (state: ListsStore) => ({
    list: state.lists.find((x) => x.id === id),
    addList: state.addList,
    addListItems: state.addListItems,
    deleteList: state.deleteList,
  });

export const listItemsSelector =
  (listId: string | undefined) => (state: ListsStore) =>
    state.listItems.filter((x) => x.listId === listId);
