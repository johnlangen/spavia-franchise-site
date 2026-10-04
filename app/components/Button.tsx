import type { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "primary" | "secondary" }
export default function Button({variant="primary",className="",children,...props}:ButtonProps) {
  return <button {...props} className={`button ${variant === "primary" ? "button-primary" : "button-outline"} ${className}`}>{children}</button>;
}
