"use client";

import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children, className = "", id, ...props }: SectionProps) {
  return (
    <section
      id={id} // ✅ forward the id
      className={`py-16 px-6 md:px-12 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {title}
        </h2>
      )}
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
