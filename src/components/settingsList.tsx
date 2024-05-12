import { resetStores } from "@/lib/state/reset";
import * as Setting from "@/components/setting";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function SettingsList() {
  const { toast } = useToast();

  const clear = () => {
    resetStores();
    toast({
      description: "List data has been reset.",
    });
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Reset</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your created lists.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={clear}>Reset</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </Setting.Input>
        </Setting.Root>
      </li>
    </ul>
  );
}
