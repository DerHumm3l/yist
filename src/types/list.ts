import { ListItem } from "./listItem";

export type List = {
  id: string;
  name: string;
  items: ListItem[];
  // commpleted: boolean;
};
