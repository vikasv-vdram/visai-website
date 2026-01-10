export default function ToolsHighlight() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      
      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06923E]/5 via-white to-blue-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smart Financial & Compliance Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Practical tools designed to help businesses and taxpayers make better financial and compliance decisions.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Tool Card */}
          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E]">
              GST Calculator
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Calculate GST amounts instantly and understand your tax liability clearly.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600">
              Income Tax Calculator
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Estimate income tax and compare tax regimes to plan better.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600">
              HSN / SAC Code Finder
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Find correct HSN or SAC codes for GST classification.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600">
              EMI Calculator
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Calculate loan EMIs and compare borrowing options.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600">
              Profit & Loss Tool
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Understand business profitability and financial performance.
            </p>
          </div>

          <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-600">
              SIP Calculator
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Plan investments and estimate long-term returns easily.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/tools"
            className="inline-flex items-center gap-2 text-[#06923E] font-semibold hover:gap-3 transition-all"
          >
            Explore all tools →
          </a>
        </div>

      </div>
    </section>
  );
}
