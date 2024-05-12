import { List } from "@/types/list";
import LinkButton from "./linkButton";
import { ChevronRight } from "lucide-react";

export interface ListCardProps {
  list: List;
}

export default function ListCard({ list }: ListCardProps) {
  return (
    <LinkButton
      size={"lg"}
      className="w-full flex justify-between"
      to={`list/${list.id}`}
    >
      <span>{list.name}</span>
      <ChevronRight />
    </LinkButton>
  );
}
