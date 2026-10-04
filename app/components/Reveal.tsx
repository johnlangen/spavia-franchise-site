import type { ReactNode } from "react";

/** Retains layout compatibility without delaying or hiding page content. */
export default function Reveal({children,className=""}: {children:ReactNode;className?:string;delay?:number}) {
  return <div className={className}>{children}</div>;
}
