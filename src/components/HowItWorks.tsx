export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How VISAI Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A structured, transparent and professional approach to managing your tax, compliance and financial needs.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Step 1 */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-[#06923E] font-bold text-xl">01</div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">
              Connect with VISAI
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Get in touch with us for a free consultation and tell us about your business or personal requirements.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-blue-600 font-bold text-xl">02</div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">
              Analysis & Planning
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              We understand your financial situation, documents, and compliance needs to build a clear plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-green-600 font-bold text-xl">03</div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">
              Execution & Compliance
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Our team handles registrations, accounting, filings and compliance with accuracy and responsibility.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition">
            <div className="text-purple-600 font-bold text-xl">04</div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">
              Ongoing Support
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              We provide continuous support, updates, tools and guidance as your long-term compliance partner.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
