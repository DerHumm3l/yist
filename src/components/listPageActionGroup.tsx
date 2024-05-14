import { Edit2, Plus } from "lucide-react";
import LinkButton from "./linkButton";
import { useEffect, useRef, useState } from "react";

export default function ListPageActionGroup() {
  const [isVisible, setIsVisible] = useState(true);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 shadow-lg rounded-md bg-white dark:bg-gray-950 p-2 dark:shadow-gray-800 overscroll-contain transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <LinkButton
        className="rounded-md"
        to="addItems"
        size={"icon"}
        variant={"outline"}
      >
        <Plus />
        <span className="sr-only">Add items</span>
      </LinkButton>
      <LinkButton
        className="rounded-md"
        to="editItems"
        size={"icon"}
        variant={"outline"}
      >
        <Edit2 />
        <span className="sr-only">Edit items</span>
      </LinkButton>
    </div>
  );
}
