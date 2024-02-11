import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTimeUntilEndOfDay() {
  const now = new Date();
  const endOfDay = new Date(now);

  endOfDay.setHours(23, 59, 59, 999);

  const timeRemaining = endOfDay.getTime() - now.getTime();

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    hours,
    minutes,
    seconds,
    totalMilliseconds: timeRemaining,
  };
}
