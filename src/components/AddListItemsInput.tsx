import { ListItem } from "@/types/listItem";
import { Input } from "./ui/input";
import React, { FormEvent } from "react";

export type AddListItemsInputProps = {
  onListItemAdded: (name: string) => void;
  onFinished: () => void;
  listItems: ListItem[];
};

export default function AddListItemsInput({
  onListItemAdded,
  onFinished,
  listItems,
}: AddListItemsInputProps) {
  const [listItem, setListItem] = React.useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!listItem) {
      onFinished();
    } else {
      onListItemAdded(listItem);
      setListItem("");
    }
  };

  return (
    <form onSubmit={submit} className="flex flex-col items-center gap-7 w-full">
      <Input
        type="text"
        placeholder="Add items..."
        onChange={(e) => setListItem(e.target.value)}
        value={listItem}
      ></Input>
      <ul className="flex flex-col items-start gap-3 w-full px-4">
        {listItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
    </form>
  );
}
