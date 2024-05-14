import { ListItem } from "@/types/listItem";
import { Checkbox } from "./ui/checkbox";
import { useListItemsActions } from "@/lib/state/hooks";

export type ListItemsViewProps = {
  listItems: ListItem[];
};

export default function ListItemsView({ listItems }: ListItemsViewProps) {
  const { updateListItem } = useListItemsActions();

  return (
    <ul className="flex flex-col items-start gap-6 w-full px-4 pb-6">
      {listItems.map((item) => (
        <li
          key={item.id}
          className="flex flex-row items-center space-x-5 space-y-0"
        >
          <Checkbox
            id={item.id}
            checked={item.checked}
            onCheckedChange={(checked) =>
              updateListItem({ ...item, checked: checked === true })
            }
          />
          <label htmlFor={item.id} className="text-sm leading-none font-normal">
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
}
