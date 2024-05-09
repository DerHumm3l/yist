import { createList, createListItem } from "@/lib/utils";
import { ListItem } from "@/types/listItem";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDefault } from "@uidotdev/usehooks";
import AddListItemsInput from "@/components/AddListItemsInput";
import {
  useListItemsActions,
  useList,
  useListsActions,
} from "@/lib/state/hooks";
import * as Header from "@/components/header";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function AddListItemsPage() {
  const { id } = useParams();

  if (!id) {
    throw new Error("Not possible");
  }

  const navigate = useNavigate();

  const listInStore = useList({ id });
  const { addList, updateList } = useListsActions();
  const { addListItems } = useListItemsActions();

  const [list] = useDefault(listInStore, createList(id));
  const [listItems, setListItems] = React.useState([] as ListItem[]);

  const submit = () => {
    if (!listInStore) {
      addList(list!);
    } else {
      updateList(list!);
    }

    addListItems(...listItems);
    navigate(`/list/${list!.id}`, { replace: true });
  };

  const listItemAdded = (name: string) => {
    const listItem = createListItem(list!, name);
    setListItems([...listItems, listItem]);
  };

  return (
    <main className="flex flex-col items-center m-auto max-w-screen-md h-screen p-4 space-y-8">
      <Header.Root>
        <Header.Left>
          <BackButton to=".." relative="path" />
        </Header.Left>
        <Header.Center>{list?.name}</Header.Center>
        <Header.Right>
          <Button size="icon" variant={"outline"} onClick={submit}>
            <Check />
          </Button>
        </Header.Right>
      </Header.Root>
      <AddListItemsInput
        listItems={listItems}
        onListItemAdded={listItemAdded}
        onFinished={submit}
      />
    </main>
  );
}
