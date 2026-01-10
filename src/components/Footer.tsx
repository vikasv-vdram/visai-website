export default function Footer() {
  return (
    <footer className="bg-[#0b1f17] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              VISAI – Tax & Accounting Professionals
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Professional tax, accounting and compliance services for Indian
              businesses and taxpayers. Built with a long-term vision to make
              finance and compliance simple, transparent and accessible.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Run your business. We manage your taxes & compliance.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
  {[
    "Business Registrations",
    "Outsourced Accounting",
    "GST & IT Filings",
    "Compliance Management",
    "Wealth & Financial Advisory",
  ].map((item) => (
    <li
      key={item}
      className="hover:text-[#5ad6a3] hover:translate-x-1 transition-all duration-200 cursor-pointer"
    >
      {item}
    </li>
  ))}
</ul>

          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Tools
            </h4>
            <ul className="space-y-2 text-sm">
  {[
    "GST Calculator",
    "Income Tax Calculator",
    "HSN / SAC Code Finder",
    "EMI & Loan Tools",
    "SIP & Investment Tools",
  ].map((tool) => (
    <li
      key={tool}
      className="hover:text-[#5ad6a3] hover:translate-x-1 transition-all duration-200 cursor-pointer"
    >
      {tool}
    </li>
  ))}

  <li className="text-[#5ad6a3] font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer">
    Explore all tools →
  </li>
</ul>

          </div>

          {/* Contact */}
          {/* Contact */}
<div>
  <h4 className="text-lg font-semibold text-white mb-4">
    Connect with VISAI
  </h4>
  <ul className="space-y-3 text-sm">
  <li className="hover:text-white transition">
    📍 Serving clients across India
  </li>

  <li className="hover:text-[#5ad6a3] transition cursor-pointer">
    📞 +91 77418 07978
  </li>

  <li className="hover:text-[#5ad6a3] transition cursor-pointer">
    📧 support@visai.in
  </li>

  <li className="pt-2 text-[#5ad6a3] font-medium hover:translate-x-1 transition-all duration-200 cursor-pointer">
    Get Free Consultation →
  </li>
</ul>

</div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} VISAI – Tax & Accounting Professionals. All rights reserved.
          </p>

          <div className="flex gap-6">
  <a href="/privacy-policy" className="hover:text-white transition">
    Privacy Policy
  </a>
  <a href="/terms-of-service" className="hover:text-white transition">
    Terms of Service
  </a>
  <a href="/disclaimer" className="hover:text-white transition">
    Disclaimer
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
