import lists from "@/data/lists.json";
import { List } from "@/types/list";
import { create } from "zustand";

export type ListsStore = {
  lists: List[];
  addList: (list: List) => void;
};

export const useListsStore = create<ListsStore>()((set) => ({
  lists: lists ?? [],
  addList: (list) => set((state) => ({ lists: [list, ...state.lists] })),
}));

export const listSelector = (id: string | undefined) => (state: ListsStore) =>
  state.lists.find((x) => x.id === id);
