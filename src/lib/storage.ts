import { Preferences } from "@capacitor/preferences";
import { StateStorage } from "zustand/middleware";

export const storage: StateStorage = {
  getItem,
  setItem,
  removeItem,
};

export function clear() {
  return Preferences.clear();
}

async function getItem(key: string) {
  const result = await Preferences.get({ key });
  return result.value;
}

function setItem(key: string, value: string) {
  return Preferences.set({ key, value });
}

function removeItem(key: string) {
  return Preferences.remove({ key });
}
