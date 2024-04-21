import { ListItem } from "@/types/listItem";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "@/lib/storage";

export type ListItemsStore = {
  listItems: ListItem[];
  addListItems: (...listItems: ListItem[]) => void;
  updateListItem: (listItem: ListItem) => void;
};

export const useListItemsStore = create<ListItemsStore>()(
  persist(
    (set) => ({
      listItems: [],
      addListItems: (...listItems) =>
        set((state) => ({ listItems: [...state.listItems, ...listItems] })),
      updateListItem: (updatedListItem) =>
        set((state) => ({
          listItems: state.listItems.map((listItem) =>
            listItem.id !== updatedListItem.id ? listItem : updatedListItem
          ),
        })),
    }),
    {
      name: "list-items-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);

export const listItemsSelector =
  (listId: string | undefined) => (state: ListItemsStore) =>
    state.listItems.filter((x) => x.listId === listId);

export const listItemsActionsSelector = () => (state: ListItemsStore) => ({
  updateListItem: state.updateListItem,
  addListItems: state.addListItems,
});
