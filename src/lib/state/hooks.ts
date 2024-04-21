import {
  listItemsActionsSelector,
  listItemsSelector,
  useListItemsStore,
} from "./listItemsStore";
import {
  listActionsSelector,
  listSelector,
  listsSelector,
  useListsStore,
} from "./listsStore";

export type useListsOptions = {
  id?: string;
};

export type useListItemsOptions = {
  listId?: string;
};

export const useLists = () => useListsStore(listsSelector());

export const useList = ({ id }: useListsOptions) =>
  useListsStore(listSelector(id));

export const useListsActions = () => useListsStore(listActionsSelector());

export const useListItems = ({ listId }: useListItemsOptions = {}) =>
  useListItemsStore(listItemsSelector(listId));

export const useListItemsActions = () =>
  useListItemsStore(listItemsActionsSelector());
