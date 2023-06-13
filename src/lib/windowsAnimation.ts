import { MouseEvent } from "react";

export function showHoverAnimation(e: MouseEvent<HTMLElement>, isDarkMode: boolean): void {
  const target = e.target as HTMLElement;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (isDarkMode) {
    target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
    target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
  }
}

export function removeHoverAnimation(e: MouseEvent<HTMLElement>): void {
  const target = e.target as HTMLElement;
  target.style.background = "";
  target.style.borderImage = "";
}
