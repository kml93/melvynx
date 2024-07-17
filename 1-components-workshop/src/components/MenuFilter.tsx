"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

export type MenuFilterProps = {
  categories: string[];
  currentFilter: string;
  // isActive: string;
  // setIsActive: React.Dispatch<React.SetStateAction<string>>;
};

const MenuFilter = (props: MenuFilterProps) => {
  const { categories, currentFilter } = props;

  return (
    <nav className="w-full md:max-w-fit">
      <ul className="flex flex-row flex-wrap gap-x-1 md:flex-col">
        <MenuItem isActive={!currentFilter} filter="" key="all">
          all
        </MenuItem>
        {categories.map((category: string) => (
          <MenuItem
            key={category}
            isActive={category === currentFilter}
            filter={category}
          >
            {category}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

type MenuItemProps = {
  isActive: boolean;
  filter: string;
  children: React.ReactNode;
};

const MenuItem = (props: MenuItemProps) => {
  const { isActive, filter, children } = props;

  return (
    <li key={filter}>
      <Button
        variant="ghost"
        asChild
        className={cn("text-nowrap capitalize", {
          "font-bold": isActive,
        })}
      >
        <Link href={`/?filter=${filter}`}>{children}</Link>
      </Button>
    </li>
  );
};

export default MenuFilter;
