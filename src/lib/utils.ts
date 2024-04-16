import { List } from "@/types/list";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { id } from "./id";
import { ListItem } from "@/types/listItem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createList(id: string) {
  const initialName = new Date().toLocaleString();

  return {
    id,
    completed: false,
    name: initialName,
  } as List;
}

export function createListItem(list: List, name: string) {
  return {
    id: id(),
    listId: list.id,
    name,
    checked: false,
  } as ListItem;
}
