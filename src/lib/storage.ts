import { List } from "@/types/list";
import { Preferences } from "@capacitor/preferences";

const LIST_STORAGE_KEY = "lists";
const LIST_ITEMS_STORAGE_KEY = "listItems";

export async function clear() {
  return Preferences.clear();
}

export async function getLists() {
  const lists = await Preferences.get({ key: LIST_STORAGE_KEY });
  return lists.value ? JSON.parse(lists.value) : [];
}

export function saveLists(lists: List[]) {
  return Preferences.set({
    key: LIST_STORAGE_KEY,
    value: JSON.stringify(lists),
  });
}

export async function getListItems() {
  const listItems = await Preferences.get({ key: LIST_ITEMS_STORAGE_KEY });
  return listItems.value ? JSON.parse(listItems.value) : [];
}

export function saveListItems(listItems: List[]) {
  return Preferences.set({
    key: LIST_ITEMS_STORAGE_KEY,
    value: JSON.stringify(listItems),
  });
}
