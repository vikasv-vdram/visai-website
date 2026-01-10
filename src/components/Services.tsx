export default function Services() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            End-to-end tax, accounting and financial services designed to support businesses and taxpayers at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Registrations */}
          <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition">
            <div className="h-12 w-12 rounded-xl bg-[#06923E]/10 flex items-center justify-center text-[#06923E] font-bold text-xl">
              R
            </div>
            
            <h3 className="mt-5 font-semibold text-xl text-gray-900 group-hover:text-[#06923E] transition">
              Registrations
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Business, startup and statutory registrations including GST, LLP, Private Limited and MSME.
            </p>
            <a
  href="/services/registrations"
  className="inline-block mt-4 text-sm text-[#06923E] font-medium hover:underline hover:translate-x-1 transition-all"
>
  Explore services →
</a>

          </div>

          {/* Accounting */}
          <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition">
            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
              A
            </div>
            <h3 className="mt-5 font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition">
              Accounting
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Outsourced accounting, dedicated support, bookkeeping, payroll and MIS reporting.
            </p>
            <p className="mt-4 text-sm text-blue-600 font-medium cursor-pointer">
              Explore services →
            </p>
          </div>

          {/* GST & IT Filings */}
          <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition">
            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
              G
            </div>
            <h3 className="mt-5 font-semibold text-xl text-gray-900 group-hover:text-green-600 transition">
              GST & IT Filings
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              GST returns, Income Tax filings, TDS returns, compliance management and notices support.
            </p>
            <p className="mt-4 text-sm text-green-600 font-medium cursor-pointer">
              Explore services →
            </p>
          </div>

          {/* Wealth */}
          <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition">
            <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
              W
            </div>
            <h3 className="mt-5 font-semibold text-xl text-gray-900 group-hover:text-purple-600 transition">
              Wealth
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Mutual funds, insurance planning, loans, financial planning and tax-saving investments.
            </p>
            <p className="mt-4 text-sm text-purple-600 font-medium cursor-pointer">
              Explore services →
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
