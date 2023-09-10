import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateTotalDhur({
  bigha,
  katha,
  dhur,
}: {
  bigha: string;
  katha: string;
  dhur: string;
}) {
  let totalDhur = +dhur;

  if (katha) totalDhur = totalDhur + +katha * 20;
  if (bigha) totalDhur = totalDhur + +bigha * 20 * 20;

  return totalDhur;
}
