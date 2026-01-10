export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      
      {/* Soft premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06923E]/10 via-white to-blue-100"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-lg md:text-xl font-bold tracking-wide text-gray-900 transition hover:text-[#06923E]">
  VISAI <span className="font-medium">Tax & Accounting Professionals</span>
</p>


          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Run Your Business. <br />
            We Manage Your Taxes & Compliance.
          </h1>

          <p className="mt-5 text-lg text-gray-600">
  Complete tax, accounting & compliance solutions for taxpayers.
</p>

          <p className="mt-3 text-gray-700 font-medium">
            GST • Income Tax • Accounting • Filings • Business Registrations
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#06923E] text-white px-9 py-3 rounded-xl font-semibold shadow-md hover:bg-[#057a34] hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </a>

            <a
              href="/services"
              className="border border-gray-300 px-9 py-3 rounded-xl font-semibold text-gray-800 hover:border-[#06923E] hover:text-[#06923E] hover:bg-green-50 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust feel */}
          <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex gap-2 items-center">✔ Professional handling</div>
            <div className="flex gap-2 items-center">✔ Structured process</div>
            <div className="flex gap-2 items-center">✔ Transparent guidance</div>
            <div className="flex gap-2 items-center">✔ Long-term business support</div>
          </div>
        </div>

        {/* RIGHT VISUAL AREA */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full hover:shadow-2xl transition">

            <div className="h-44 rounded-2xl bg-gradient-to-br from-green-100 via-white to-blue-100 mb-6 p-4 flex flex-col justify-between">
  <div className="h-3 w-2/3 bg-white rounded"></div>
  <div className="h-3 w-full bg-white rounded"></div>
  <div className="h-3 w-5/6 bg-white rounded"></div>
  <div className="h-3 w-3/4 bg-white rounded"></div>
</div>

            <h3 className="font-bold text-lg text-gray-900">
              Smart compliance. Clear systems. Reliable support.
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              A structured approach to managing your business taxes, filings, and ongoing compliance — designed for Indian entrepreneurs.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• GST & Income Tax handling</li>
              <li>• Accounting & reporting</li>
              <li>• Business registrations</li>
              <li>• Ongoing compliance support</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}
