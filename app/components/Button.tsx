"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"; // ✅ ensures hand cursor

  const variants = {
    primary: "bg-[#C2A878] text-white hover:bg-[#b09466]",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
