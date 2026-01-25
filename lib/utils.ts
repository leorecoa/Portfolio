import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Função utilitária para mesclar classes do Tailwind sem conflitos
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}