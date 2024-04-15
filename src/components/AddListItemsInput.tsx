import { Input } from "./ui/input";
import React, { FormEvent } from "react";

export type AddListItemsInputProps = {
  onListItemAdded: (name: string) => void;
};

export default function AddListItemsInput({
  onListItemAdded,
}: AddListItemsInputProps) {
  const [listItem, setListItem] = React.useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onListItemAdded(listItem);
    setListItem("");
  };

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        placeholder="Add items..."
        onChange={(e) => setListItem(e.target.value)}
        value={listItem}
      ></Input>
    </form>
  );
}
