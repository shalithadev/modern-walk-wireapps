import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Capitalizes the first letter of a string and makes the rest lowercase.
// If the input string is empty or falsy, returns an empty string.
export const capitalize = (str: string) =>
  str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

// Capitalizes the first letter of every word in a sentence.
// Splits the sentence by spaces, capitalizes each word, then joins them back.
export const capitalizeWords = (sentence: string) =>
  sentence.split(" ").map(capitalize).join(" ");

// Shuffles the elements of an array in random order using the Fisher-Yates algorithm (Knuth shuffle).
// Returns a new array, leaving the original array unchanged.
export const shuffleArray = <T>(array: T[]): T[] => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};
