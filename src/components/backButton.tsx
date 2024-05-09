import { ChevronLeft } from "lucide-react";
import LinkButton from "./LinkButton";
import { LinkProps } from "react-router-dom";

export type BackButtonProps = {
  className?: string;
  to: string;
  relative?: LinkProps["relative"];
};

export default function BackButton({
  className,
  to,
  relative,
}: BackButtonProps) {
  return (
    <LinkButton
      to={to}
      relative={relative}
      size={"icon"}
      variant={"outline"}
      className={className}
    >
      <ChevronLeft />
    </LinkButton>
  );
}
