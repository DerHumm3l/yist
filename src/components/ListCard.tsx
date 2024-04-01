import { List } from "@/types/list";

export interface ListCardProps {
  list: List;
}

export default function ListCard({ list }: ListCardProps) {
  return <div>{list.name}</div>;
}
