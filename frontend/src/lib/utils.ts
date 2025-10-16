import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// October 16, 2025
export function formatDate(dateToTransform: Date | string) {
  const date = new Date(dateToTransform);

  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const dateFormatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    weekday,
    dateFormatted,
  };
}

// Thu, Oct 16
export function formatDateShort(date: Date) {
  const newDate = new Date(date);
  const formatted = newDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return formatted;
}

export function formatHours(hourToTransform: Date | string) {
  const date = new Date(hourToTransform);

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return time;
}
