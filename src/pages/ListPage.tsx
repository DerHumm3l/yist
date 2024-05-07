import { useParams } from "react-router-dom";
import { useList, useListItems } from "@/lib/state/hooks";
import * as Header from "@/components/header";
import BackButton from "@/components/backButton";
import ListPageActionGroup from "@/components/listPageActionGroup";
import ListItemsView from "@/components/listItemsView";

export default function ListPage() {
  const { id } = useParams();
  const list = useList({ id });
  const listItems = useListItems({ listId: list?.id });

  if (!list) {
    return <div>ERROR</div>;
  }

  return (
    <main className="flex flex-col items-center m-auto max-w-screen-md h-screen">
      <Header.Root>
        <Header.Left>
          <BackButton to="/" />
        </Header.Left>
        <Header.Center>
          <h1>{list.name}</h1>
        </Header.Center>
        <Header.Right></Header.Right>
      </Header.Root>
      <ListItemsView listItems={listItems} />
      <ListPageActionGroup />
    </main>
  );
}
