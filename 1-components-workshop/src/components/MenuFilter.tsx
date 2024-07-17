"use client";

import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export type MenuFilterProps = {
  isActive: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  children: string[];
};

const MenuFilter = (props: MenuFilterProps) => {
  const { isActive, setIsActive, children } = props;

  const categories = children;
  const hrefStart = "/?filter=";

  return (
    <nav className="w-full md:max-w-fit">
      <ul className="flex flex-row flex-wrap gap-x-1 md:flex-col">
        {/* <li className="text-nowrap">
          <Button
            variant="ghost"
            asChild
            className={isActive === allString ? "font-bold" : undefined}
            onClick={() => setIsActive(allString)}
          >
            <Link href={hrefStart}>{capitalize(allString)}</Link>
          </Button>
        </li> */}
        {categories.map((category: string, index: number) => (
          <li className="text-nowrap" key={index + category}>
            <Button
              variant="ghost"
              asChild
              className={isActive === category ? "font-bold" : undefined}
              onClick={() => setIsActive(category)}
            >
              <Link href={hrefStart + category}>{capitalize(category)}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuFilter;
