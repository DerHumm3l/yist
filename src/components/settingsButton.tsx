import { Settings } from "lucide-react";
import LinkButton from "./LinkButton";

export type SettingsButtonProps = {
  className?: string;
};

export default function SettingsButton({ className }: SettingsButtonProps) {
  return (
    <LinkButton
      to="settings"
      size={"icon"}
      variant={"outline"}
      className={className}
    >
      <Settings />
    </LinkButton>
  );
}
