import LinkButton from "@/components/LinkButton";
import { Button } from "@/components/ui/button";
import { listSelector, useListsStore } from "@/lib/store";
import { createList } from "@/lib/utils";
import { List } from "@/types/list";
import { ListItem } from "@/types/listItem";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddListItemsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { list, addList, addListItems, deleteList } = useListsStore(
    listSelector(id)
  );

  const [listItems, setListItems] = React.useState([] as ListItem[]);

  if (!list && id) {
    // create list
    addList(createList(id));
  }

  const cancel = () => {
    // navigate back
    // delete list if new
    navigate(-1);
  };

  const submit = () => {
    // save listItems
  };

  return (
    <main className="">
      <h1>Add list items page</h1>
      <Button onClick={cancel}>Cancel</Button>
      <Button onClick={submit}>Submit</Button>
    </main>
  );
}
