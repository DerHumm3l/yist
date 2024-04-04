import LinkButton from "@/components/LinkButton";
import { listSelector, useListsStore } from "@/lib/store";
import { createList } from "@/lib/utils";
import { useParams } from "react-router-dom";

export default function AddListItemsPage() {
  const { id } = useParams();
  const { list, addList } = useListsStore(listSelector(id));

  if (!list && id) {
    // create list
    addList(createList(id));
  }

  return (
    <main className="">
      <h1>Add list items page</h1>
      <LinkButton to={`/list/${id}`}>Submit</LinkButton>
    </main>
  );
}
