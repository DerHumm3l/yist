import { Edit2, Plus } from "lucide-react";
import LinkButton from "./linkButton";

export default function ListPageActionGroup() {
  return (
    <div className="flex gap-2 border-2 rounded-md p-2 bottom-4 fixed">
      <LinkButton to="addItems" size={"icon"}>
        <Plus />
      </LinkButton>
      <LinkButton to="editItems" size={"icon"}>
        <Edit2 />
      </LinkButton>
    </div>
  );
}
