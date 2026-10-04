import type { ReactNode } from "react";

/** Server-rendered and visible by default; the site observer adds motion on entry. */
export default function Reveal({children,className="",delay=0,variant="rise"}: {children:ReactNode;className?:string;delay?:number;variant?:"rise"|"photo"}) {
  return <div className={className} data-motion={variant} data-motion-delay={delay}>{children}</div>;
}
