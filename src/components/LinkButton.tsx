import { Link, LinkProps } from "react-router-dom";
import { Button } from "./ui/button";

export default function LinkButton(
  props: LinkProps & React.RefAttributes<HTMLAnchorElement>
) {
  return (
    <Button asChild>
      <Link {...props} />
    </Button>
  );
}
