import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const clear = () => {
    // clear state
  };

  return (
    <main>
      <h1>Settings page</h1>
      <Button onClick={clear}>Clear</Button>
    </main>
  );
}
