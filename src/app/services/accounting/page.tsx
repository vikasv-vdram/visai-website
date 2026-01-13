import ScrollToTop from "@/components/ScrollToTop";

export default function AccountingPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-18 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Accounting & Outsourced Finance Services
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Accurate books. Clear numbers. Confident decisions. VISAI provides
              professional accounting and outsourced finance services for
              startups, professionals, and growing businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-[#06923E] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#057a34] transition"
              >
                Talk to Accounting Expert
              </a>

              <a
                href="/contact"
                className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-800 hover:border-[#06923E] hover:text-[#06923E] transition"
              >
                Free Consultation
              </a>
            </div>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <img
              src="/illustrations/accounting.svg"
              alt="Accounting and financial management"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>


      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
          Our Accounting Services
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Bookkeeping & Accounting",
            "Outsourced Accounting",
            "MIS & Financial Reporting",
            "Payroll Management",
            "Compliance Support",
            "Business Advisory Support",
          ].map((item) => (
            <div key={item} className="bg-white p-4 rounded-3xl border shadow-sm hover:shadow-xl transition">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ACCOUNTING RESPONSIBILITIES */}
<div className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      Accounting Services by VISAI
    </h2>

    <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
      Our accounting services go beyond basic bookkeeping. We manage your
      complete financial records, statutory obligations, and reporting systems
      to ensure your business remains compliant, audit-ready, and financially
      clear.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        "Regular updating of accounts",
        "Taking care of returns and statutory dues",
        "Developing reports for annual audit support",
        "Performing bank reconciliation tasks",
        "Maintaining tax compliance of the organization",
        "Solving and responding to auditor queries",
        "Maintaining invoices and employee expense records",
        "Looking after fixed assets and accounting of the same",
        "Creating MIS reports including balance sheet, receivables, payables, and profit & loss",
        "Offering guidance and accounting consulting support",
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border hover:shadow-lg transition"
        >
          <span className="text-[#06923E] mt-1">✔</span>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}

    </div>

  </div>
</div>

{/* BOOKKEEPING SERVICES */}
<div className="max-w-7xl mx-auto px-6 py-14">

  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
    Bookkeeping Services by VISAI
  </h2>

  <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
    Our bookkeeping services ensure that every financial transaction is
    recorded accurately and systematically, giving your business a strong
    foundation for accounting, compliance, and financial reporting.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

    {[
      "Handling and structuring the chart of accounts",
      "Maintaining the accuracy of books at all times",
      "Managing expense ledger, general ledger, and asset ledger",
      "Recording cash inflow and outflow of the business",
      "Maintaining accounts receivable and payable records",
      "Creating monthly reports, analysis, and cash-flow statements",
    ].map((item) => (
      <div
        key={item}
        className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border hover:shadow-lg transition"
      >
        <span className="text-[#06923E] mt-1">✔</span>
        <p className="text-gray-700 leading-relaxed">{item}</p>
      </div>
    ))}

  </div>
</div>

{/* REPORTS PROVIDED */}
<div className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      Reports Provided by VISAI
    </h2>

    <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
      VISAI delivers structured financial reports to ensure transparency,
      compliance, and informed business decision-making. Our reporting system
      is designed to keep your business audit-ready and financially organized.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

      {[
        "General ledger report delivered at the end of each month",
        "MIS reports delivered at the end of each month",
        "Employee reimbursement and expense reports",
        "Management of PF, PT, TDS, ESIC, LWF, and statutory accounting entries",
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border hover:shadow-lg transition"
        >
          <span className="text-blue-600 mt-1">✔</span>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}

    </div>

  </div>
</div>

{/* INDIA SEO SECTION */}
<div className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
    Why Businesses in India Outsource Accounting & Bookkeeping Services
  </h2>

  <div className="mt-8 max-w-5xl space-y-5 text-gray-600 leading-relaxed">

    <p>
      In India, businesses are required to comply with multiple financial and
      statutory regulations including Income Tax, GST, TDS, payroll laws,
      professional tax, and industry-specific compliances. Managing these
      requirements internally often becomes complex, time-consuming, and
      costly, especially for startups, professionals, and growing companies.
    </p>

    <p>
      Outsourcing accounting and bookkeeping services allows Indian businesses
      to focus on operations and growth while professionals handle their
      financial systems, compliance obligations, and reporting responsibilities.
      It reduces the risk of penalties, ensures accurate financial records, and
      provides business owners with timely financial insights.
    </p>

    <p>
      With frequent regulatory updates, digital compliance platforms, and
      increasing scrutiny by tax authorities, structured accounting is no
      longer optional. Businesses require reliable accounting partners who
      understand Indian taxation, statutory audits, and financial reporting
      standards.
    </p>

    <p>
      VISAI provides businesses with a dedicated accounting support system that
      combines professional expertise, compliance knowledge, and structured
      financial processes. Our outsourcing model enables businesses to maintain
      audit-ready books, monitor cash flows, manage statutory obligations, and
      make informed business decisions without building heavy in-house teams.
    </p>

  </div>
</div>

{/* VISAI USPs */}
<div className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-16">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      USPs Offered by VISAI
    </h2>

    <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
      VISAI delivers structured, reliable, and compliance-driven accounting
      services designed to support long-term business stability and growth.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "High accuracy of books of accounts",
        "Fraud check and financial control analysis",
        "Cost-effective outsourced accounting services",
        "Tax and statutory compliance maintenance",
        "Use of latest tools and accounting technologies",
        "Up-to-date books with clear accounting status",
      ].map((item) => (
        <div
          key={item}
          className="flex items-start gap-4 bg-white p-4 rounded-3xl shadow-sm border hover:shadow-xl transition"
        >
          <span className="text-blue-600 mt-1">✔</span>
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}

    </div>

  </div>
</div>


      {/* BENEFITS */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
            Benefits of Professional Accounting
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Accurate financial records",
              "Better tax & compliance control",
              "Improved cash-flow management",
              "Stronger business decisions",
              "Reduced compliance risk",
              "Professional reporting system",
              "Business performance visibility",
              "Scalable finance systems",
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-2xl shadow-sm border">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* UNIQUE FEATURES */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
            What Makes VISAI Accounting Different
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Compliance-first accounting",
              "Outsourced finance department",
              "MIS & business insights",
              "4 Step accounting and risk free systems",
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-3xl border shadow-sm hover:shadow-xl transition">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

{/* FAQ */}
<div className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
    Accounting – Frequently Asked Questions
  </h2>

  <p className="mt-5 text-gray-600 max-w-3xl leading-relaxed">
    Common questions businesses ask before outsourcing accounting and
    bookkeeping services.
  </p>

  <div className="mt-10 space-y-4">

    {[
      {
        q: "Do startups really need professional accounting from the beginning?",
        a: "Yes. Early-stage accounting helps avoid tax issues, cash flow mismanagement, and compliance risks. It also prepares businesses for funding and audits.",
      },
      {
        q: "Can VISAI manage complete outsourced accounting?",
        a: "Yes. VISAI provides end-to-end outsourced accounting including bookkeeping, MIS reporting, payroll coordination, and compliance accounting support.",
      },
      {
        q: "Will VISAI support during audits and tax notices?",
        a: "Yes. We provide accounting assistance, documentation support, and report preparation during statutory audits, GST proceedings, and income tax assessments.",
      },
      {
        q: "Is accounting customized based on business type?",
        a: "Absolutely. Our accounting structure depends on your industry, transaction volume, regulatory obligations, and business goals.",
      },
      {
        q: "How often will I receive accounting reports?",
        a: "Reports are typically delivered monthly. However, frequency can be customized based on management and compliance needs.",
      },
    ].map((item) => (
      <details
        key={item.q}
        className="group bg-white border rounded-2xl shadow-sm p-5 open:shadow-lg transition"
      >
        <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center">
          {item.q}
          <span className="text-[#06923E] group-open:rotate-45 transition">+</span>
        </summary>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          {item.a}
        </p>
      </details>
    ))}

  </div>
</div>


      {/* CTA */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Looking for reliable accounting support?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Let VISAI manage your accounting so you can focus on business growth.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-[#06923E] text-white px-10 py-4 rounded-xl font-semibold shadow hover:bg-[#057a34] transition"
          >
            Connect with VISAI
          </a>
        </div>
      </div>

      <ScrollToTop />

    </section>
  );
}
