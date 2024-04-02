import { List } from "@/types/list";
import LinkButton from "./LinkButton";

export interface ListCardProps {
  list: List;
}

export default function ListCard({ list }: ListCardProps) {
  return <LinkButton to={`list/${list.id}`}>{list.name}</LinkButton>;
}
