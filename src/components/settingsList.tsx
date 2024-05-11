import { resetStores } from "@/lib/state/reset";
import * as Setting from "@/components/setting";
import { Button } from "./ui/button";

export default function SettingsList() {
  const clear = () => {
    resetStores();
  };

  return (
    <ul className="w-full flex flex-col items-center divide-y">
      <li className="p-4 w-full">
        <Setting.Root>
          <Setting.Label
            label="Reset data"
            description="All lists which were created by you will be deleted."
          />
          <Setting.Input>
            <Button onClick={clear}>Reset</Button>
          </Setting.Input>
        </Setting.Root>
      </li>
    </ul>
  );
}
