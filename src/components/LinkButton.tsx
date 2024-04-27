import { Link, LinkProps } from "react-router-dom";
import { Button, ButtonProps } from "./ui/button";

export type LinkButtonProps = LinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "variant" | "size">;

export default function LinkButton({
  variant,
  size,
  ...linkProps
}: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size}>
      <Link {...linkProps} />
    </Button>
  );
}
