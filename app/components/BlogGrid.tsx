"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const, // ✅ fixed typing
    },
  }),
};

export default function BlogGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {blogPosts.map((post, i) => (
        <motion.div
          key={post.href}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
        <Link
          href={post.href}
          className="group block h-full border rounded-xl shadow hover:shadow-xl overflow-hidden transition-all duration-300 hover:border-[#C2A878] flex flex-col"
        >

            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-[#C2A878] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-2 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-[#C2A878] font-semibold inline-block mt-auto pt-4 group-hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

const blogPosts = [

  {
    title: "The Power of Spavia’s Brand Partners: Vendor Collaborations That Drive Revenue",
    excerpt:
      "Spavia’s premium vendor partnerships elevate the guest experience, strengthen franchise revenue, and support franchisees through training, buying power, and curated, high-performance products.",
    image: "/blog/blog19.png",
    href: "/blog/2025/11/26/the-power-of-spavias-brand-partners-vendor-collaborations-that-drive-revenue",
  },

  {
    title: "How $8 Could Feed Every Hungry Child: A Thanksgiving Reflection From Spavia’s CEO",
    excerpt:
      "A message of gratitude from Spavia’s CEO — exploring how small, targeted acts of generosity can feed every hungry child in America, and celebrating Spavia’s 20th Anniversary donation impact.",
    image: "/blog/blog18.png",
    href: "/blog/2025/11/25/how-8-could-feed-every-hungry-child-a-thanksgiving-reflection-from-spavias-ceo",
  },
  
  {
    title: "Spavia Day Spa Named to 2025 Franchise Times Top 400",
    excerpt:
      "Spavia celebrates its 20th year with design-led growth, national expansion, and recognition on the 2025 Franchise Times Top 400 list for accessible, affordable luxury.",
    image: "/blog/blog17.png",
    href: "/blog/2025/11/20/spavia-day-spa-named-to-2025-franchise-times-top-400-as-the-brand-celebrates-its-20th-year-with-design-led-growth-and-affordable-luxury-at-scale",
  },  

  {
    title: "Spavia Co-Founder Allison Langenderfer Named a “Woman of Wonder” for the Second Consecutive Year",
    excerpt:
      "Allison Langenderfer, President and Co-Founder of Spavia Day Spa, has been named to Franchise Dictionary Magazine’s “50 Women of Wonder” list for the second consecutive year, recognizing her leadership and community impact.",
    image: "/blog/blog16.png", // temporary placeholder – replace when ready
    href: "/blog/2025/10/29/spavia-co-founder-allison-langenderfer-named-a-woman-of-wonder-for-the-second-consecutive-year",
  },
  

  {
    title: "Celebrating 20 Years of Spavia: A Look Back and a Vision Forward",
    excerpt:
      "Spavia celebrates 20 years of inspiring wellness through accessible luxury, founder-led passion, and community-driven growth.",
    image: "/blog/blog15.png",
    href: "/blog/2025/10/14/celebrating-20-years-of-spavia-a-look-back-and-a-vision-forward",
  },  
  {
    title: "The Power of a National Brand with a Local Focus",
    excerpt:
      "Spavia offers a unique franchise opportunity that blends the strength of a nationally recognized brand with the personalized touch of a community-focused business.",
    image: "/blog/blog14.png",
    href: "/blog/2025/08/28/the-power-of-a-national-brand-with-a-local-focus",
  },
  {
    title: "Beyond a Franchise: Building a Legacy with Spavia",
    excerpt:
      "Spavia franchise ownership offers an opportunity to create a lasting legacy through financial success, personal growth, and community impact.",
    image: "/blog/blog13.png",
    href: "/blog/2025/07/29/beyond-a-franchise-building-a-legacy-with-spavia",
  },
  {
    title:
      "The Power of Franchisee Success Stories: How Spavia Franchisees Are Thriving",
    excerpt:
      "Discover the ultimate escape with Spavia, where relaxation meets opportunity. Learn how franchisees are building thriving businesses while making an impact in their communities.",
    image: "/blog/blog12.png",
    href: "/blog/2025/06/24/the-power-of-franchisee-success-stories-how-spavia-franchisees-are-thriving",
  },
  {
    title:
      "Spavia’s Brand Evolution: Pioneering Wellness and Staying Ahead in a Changing World",
    excerpt:
      "Spavia offers personalized wellness experiences tailored to refresh both body and mind. From therapeutic massages to advanced treatments, their services focus on redefining relaxation and self-care for a healthier, rejuvenated you.",
    image: "/blog/blog11.jpg",
    href: "/blog/2025/05/14/spavias-brand-evolution-pioneering-wellness-and-staying-ahead-in-a-changing-world",
  },
  {
    title:
      "Spavia’s Guest Care in the Evolving Wellness & Spa Franchise Industry",
    excerpt:
      "Spavia is redefining the spa experience by offering personalized services that cater to the unique needs of every guest. With resort-inspired amenities and a focus on affordable luxury, Spavia creates a tranquil environment where relaxation and rejuvenation come naturally.",
    image: "/blog/blog10.jpeg",
    href: "/blog/2025/04/11/spavias-guest-care-in-the-evolving-wellness--spa-franchise-industry",
  },
  {
    title: "The Power of Community: How Spavia Stands Out by Giving Back",
    excerpt:
      "This year, as Spavia celebrates its 20th anniversary, we reflect not only on our growth as a leader in the spa industry but also on the core values that define us. A key element of our identity is our commitment to community engagement.",
    image: "/blog/blog9.jpg",
    href: "/blog/2025/03/10/the-power-of-community-how-spavia-stands-out-by-giving-back",
  },
  {
    title:
      "Supporting Franchisees for Success: Inside Spavia’s Comprehensive Training Program",
    excerpt:
      "Our meticulously designed and comprehensive training program is intentionally structured to ensure that each and every Spavia franchisee is exceptionally well-prepared and fully empowered to confidently and effectively operate their spa business.",
    image: "/blog/blog8.jpg",
    href: "/blog/2025/02/10/supporting-franchisees-for-success-inside-spavias-comprehensive-training-program",
  },
  {
    title:
      "A New Year, A New Opportunity: Why Spavia is the Right Franchise to Start in 2025",
    excerpt:
      "If you're exploring franchise opportunities, Spavia Day Spa is a name you won’t want to overlook for 2025.",
    image: "/blog/blog7.jpg",
    href: "/blog/2025/01/16/a-new-year-a-new-opportunity-why-spavia-is-the-right-franchise-to-start-in-2025",
  },
  {
    title:
      "A Guide to Choosing the Best Spa Franchise: Key Factors and Considerations",
    excerpt:
      "Discover how to choose the best spa franchise with our guide. Learn about brand reputation, financial performance, and more to succeed in the spa industry.",
    image: "/blog/blog6.jpg",
    href: "/blog/2024/12/03/a-guide-to-choosing-the-best-spa-franchise-key-factors-and-considerations",
  },
  {
    title: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
    excerpt:
      "Discover the Spavia Advantage—an affordable day spa franchise offering exceptional services. Join us in delivering relaxation and wellness to your community.",
    image: "/blog/blog4.jpg",
    href: "/blog/2024/03/05/cost-effective-day-spa-franchise",
  },
  {
    title: "Spa Franchise Opportunities: Where Passion Meets Profit",
    excerpt:
      "Turn your passion for wellness into a profitable venture with our spa franchise opportunities. Take the first step towards financial success!",
    image: "/blog/blog2.jpg",
    href: "/blog/2024/04/16/spa-franchise-opportunities",
  },
  {
    title: "A Cost-Effective Day Spa Franchise: The Spavia Advantage",
    excerpt:
      "Unlock the lucrative potential of Spavia, a cost-effective day spa franchise.",
    image: "/blog/blog1.jpeg",
    href: "/blog/2024/10/22/cost-effective-day-spa",
  },
  {
    title:
      "How Day Spa Franchisees Are Capitalizing on Health and Wellness in the New Year",
    excerpt:
      "As we step into the New Year, there's a collective shift in focus as individuals embrace the 'Great Rejuvenation'—a term capturing the heightened awareness of health and wellness...",
    image: "/blog/blog0.jpeg",
    href: "/blog/2024/02/02/how-day-spa-franchisees-are-capitalizing-on-health-and-wellness-in-the-new-year",
  },
  {
    title: "Spavia: 2023 Reflections and Exciting Anticipations for 2024",
    excerpt:
      "The year 2023 has unfolded as a thrilling chapter for Spavia Day Spa, marked by substantial growth and exciting developments...",
    image: "/blog/blog00.jpg",
    href: "/blog/2024/01/04/spavia-2023-reflections-and-exciting-anticipations-for-2024",
  },
  {
    title: "3 Reasons to Invest in a Day Spa Franchise",
    excerpt:
      "As the wellness industry gains momentum amongst consumers, now is the ideal time to explore the world of day spa franchises. From rejuvenating massage therapies to cutting-edge skincare treatments...",
    image: "/blog/blog000.jpeg",
    href: "/blog/2023/11/28/reasons-to-invest-in-a-day-spa-franchise",
  },
];
