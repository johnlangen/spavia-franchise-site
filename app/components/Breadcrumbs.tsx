import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Pin the bar just under the nav. Needed on snap-scroll pages where the
      bar would otherwise be snapped under the sticky nav and hidden. */
  sticky?: boolean;
}

export default function Breadcrumbs({ items, sticky = false }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://spaviafranchise.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Consistent full-width light bar so breadcrumbs stay readable on every
          page, including those whose dark hero starts directly under the nav. */}
      <div
        className={`bg-white border-b border-gray-100${
          sticky ? " md:sticky md:top-[80px] lg:top-[72px] z-40" : ""
        }`}
      >
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {allItems.map((item, index) => {
              const isLast = index === allItems.length - 1;
              return (
                <li key={index} className="flex items-center gap-1">
                  {index > 0 && (
                    <span className="text-gray-400" aria-hidden="true">/</span>
                  )}
                  {isLast || !item.href ? (
                    <span className="text-gray-700 font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-[#C2A878] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </>
  );
}
