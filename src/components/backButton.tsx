import { ChevronLeft } from "lucide-react";
import LinkButton from "./LinkButton";

export type BackButtonProps = {
  className?: string;
  to: string;
};

export default function BackButton({ className, to }: BackButtonProps) {
  return (
    <LinkButton to={to} size={"icon"} variant={"outline"} className={className}>
      <ChevronLeft />
    </LinkButton>
  );
}
