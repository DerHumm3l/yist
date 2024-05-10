import { useList, useListItems, useListItemsActions } from "@/lib/state/hooks";
import { useNavigate, useParams } from "react-router-dom";
import * as Header from "@/components/header";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Check, Trash } from "lucide-react";
import { ListItem } from "@/types/listItem";
import { useState } from "react";

export default function EditListItemsPage() {
  const { id: listId } = useParams();
  const navigate = useNavigate();
  const list = useList({ id: listId });
  const listItems = useListItems({ listId });
  const { deleteListItems } = useListItemsActions();
  const [removedListItems, setRemovedListItems] = useState([] as ListItem[]);

  const displayedListItems = listItems.filter(
    (listItem) => !removedListItems.find((x) => x.id === listItem.id)
  );

  const submit = () => {
    deleteListItems(...removedListItems);
    navigate(`/list/${list!.id}`, { replace: true });
  };

  const remove = (listItem: ListItem) => {
    setRemovedListItems([...removedListItems, listItem]);
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
      <ul className="flex flex-col items-start gap-4 w-full px-4">
        {displayedListItems.map((listItem) => (
          <li
            key={listItem.id}
            className="flex flex-row justify-between items-center space-x-3 space-y-0 w-full"
          >
            <span>{listItem.name}</span>
            <Button
              size={"smallIcon"}
              variant={"outline"}
              onClick={() => remove(listItem)}
            >
              <Trash size={20} />
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
