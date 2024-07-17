import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const capitalize = (str: string): string => {
  if (str.includes("-")) {
    return str
      .split("-")
      .map((s) => capitalize(s))
      .join("-");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
