import { List } from "@/types/list";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
