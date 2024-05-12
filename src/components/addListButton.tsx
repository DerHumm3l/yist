import LinkButton from "./linkButton";

export type AddListButtonProps = {
  className?: string;
};

export default function AddListButton({ className }: AddListButtonProps) {
  return (
    <LinkButton size={"lg"} to="list/new" className={className}>
      Add list
    </LinkButton>
  );
}
