import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (str: string) =>
  str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

export const capitalizeWords = (sentence: string) =>
  sentence.split(" ").map(capitalize).join(" ");
