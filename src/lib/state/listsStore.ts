import { List } from "@/types/list";
import { createWithReset } from "./reset";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "@/lib/storage";

export type ListsStore = {
  lists: List[];
  addList: (list: List) => void;
  updateList: (list: List) => void;
  deleteList: (list: List) => void;
};

export const useListsStore = createWithReset<ListsStore>()(
  persist(
    (set) => ({
      lists: [],
      addList: (list) => set((state) => ({ lists: [list, ...state.lists] })),
      deleteList: (list) =>
        set((state) => ({
          lists: state.lists.filter((x) => x.id !== list.id),
        })),
      updateList: (updatedList) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id !== updatedList.id ? list : updatedList
          ),
        })),
    }),
    {
      name: "lists-storage",
      storage: createJSONStorage(() => storage),
    }
  )
);

export const listsSelector = () => (state: ListsStore) => state.lists;

export const listSelector = (id: string | undefined) => (state: ListsStore) =>
  state.lists.find((x) => x.id === id);

export const listActionsSelector = () => (state: ListsStore) => ({
  addList: state.addList,
  deleteList: state.deleteList,
  updateList: state.updateList,
});
