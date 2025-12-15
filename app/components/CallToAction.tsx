"use client";

export default function CallToAction() {
  return (
    <div className="text-center mt-8">
      <a
        href="https://calendly.com/tyler-spaviadayspa/new-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#C2A878] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b09466] transition"
      >
        Schedule a Call
      </a>
      <p className="mt-2 text-sm text-gray-600">
        *Spavia requires a minimum of $200,000 in liquid capital to qualify for franchise ownership.
      </p>
    </div>
  );
}
