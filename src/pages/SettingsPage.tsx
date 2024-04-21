import LinkButton from "@/components/LinkButton";
import { Button } from "@/components/ui/button";
import { resetStores } from "@/lib/state/reset";

export default function SettingsPage() {
  const clear = () => {
    resetStores();
  };

  return (
    <main>
      <h1>Settings page</h1>
      <LinkButton to="/">Back</LinkButton>
      <Button onClick={clear}>Clear</Button>
    </main>
  );
}
