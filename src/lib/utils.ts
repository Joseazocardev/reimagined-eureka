import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleWhatsAppClick = () => {
  window.open(
    'https://wa.me/5491122472553?text=Hola%20Evelyn%2C%20me%20gustar%C3%ADa%20consultar%20por%20un%20arreglo.',
    '_blank'
  );
};

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
