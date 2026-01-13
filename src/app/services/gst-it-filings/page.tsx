import ScrollToTop from "@/components/ScrollToTop";

export default function GstItFilingsPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              GST & Income Tax Filings Services
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              End-to-end GST and income tax compliance support for businesses,
              professionals, and individuals across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="bg-[#06923E] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#057a34] transition">
                Talk to Compliance Expert
              </a>
              <a href="/contact" className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-800 hover:border-[#06923E] hover:text-[#06923E] transition">
                Free Compliance Review
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-1 border border-gray-100">
            <img src="/illustrations/gst-tax.svg" alt="GST and Income Tax services" className="w-full max-w-md mx-auto h-auto" />
          </div>

        </div>
      </div>

      {/* SERVICES COVERED */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
          GST & Income Tax Services We Provide
        </h2>

  <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: "GST return filing (GSTR-1, GSTR-3B, GSTR-9, GSTR-9C)",
        link: "gst-services",
      },
      {
        title: "Income tax return filing",
        link: "it-services",
      },
      {
        title: "TDS & TCS returns",
        link: "it-services",
      },
      {
        title: "GST reconciliation",
        link: "gst-detailed",
      },
      {
        title: "ROC / MCA filings",
        link: "roc-mca",
      },
      {
        title: "Notices & compliance support",
        link: "tax-notices",
      },
    ].map((service) => (
      <div
        key={service.title}
        className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E] transition">
          {service.title}
        </h3>

        <a
          href={`/services/gst-it-filings#${service.link}`}
          className="inline-block mt-4 text-sm text-[#06923E] font-medium hover:underline hover:translate-x-1 transition-all"
        >
          Explore details & Connect →
        </a>
      </div>
            
          ))}
        </div>
      </div>

      {/* GST RESPONSIBILITIES */}
      <div id="gst-services" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
            GST Compliance Services by VISAI
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Monthly & quarterly GST returns",
              "ITC reconciliation",
              "GST liability calculation",
              "GST notices & audits",
              "Annual GST returns",
              "GST advisory support",
            ].map((item) => (
              <div key={item} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border">
                <span className="text-[#06923E] mt-1">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DETAILED GST */}
      <div id="gst-detailed" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
          Detailed GST Compliance Responsibilities
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">

          {[
            { title: "GST return filing", desc: "End-to-end filing of GSTR-1, 3B, 9 & 9C as applicable." },
            { title: "Sales & ITC reconciliation", desc: "Reconciliation of books with GST portal data." },
            { title: "Input tax credit validation", desc: "Ensuring eligible credit utilization." },
            { title: "GST payments", desc: "Accurate liability calculation & challans." },
            { title: "GST notices & audits", desc: "Professional handling and reply support." },
            { title: "Annual compliance", desc: "GST annual returns & audit coordination." },
            { title: "E-invoicing advisory", desc: "Compliance advisory & structure support." },
            { title: "Registration updates", desc: "Amendments, cancellations & corrections." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 text-lg">✔</span>
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* IT RESPONSIBILITIES */}
      <div id="it-services" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
            Income Tax Compliance Services by VISAI
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Income tax return filing",
              "Advance tax planning",
              "TDS compliance",
              "Tax computation",
              "Scrutiny support",
              "Notice handling",
            ].map((item) => (
              <div key={item} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border hover:-translate-y-1 hover:shadow-xl transition-all duration-300
">
                <span className="text-[#06923E] mt-1">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DETAILED IT */}
      <div id="it-detailed" className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
          Detailed Income Tax Compliance Responsibilities
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">

          {[
            { title: "Income tax return preparation and filing", desc: "Preparation and filing of income tax returns for individuals, professionals, firms, LLPs, and companies in accordance with Indian tax laws." },
            { title: "Advance tax computation and payment support", desc: "Calculation of advance tax liabilities and assistance with timely payment to avoid interest and penalties." },
            { title: "TDS compliance and quarterly return filings", desc: "Management of TDS calculations, challans, and quarterly TDS returns with reconciliation support." },
            { title: "Tax computation and tax-saving planning", desc: "Professional tax computation along with guidance on legal tax-saving opportunities." },
            { title: "Handling scrutiny cases and income tax notices", desc: "Drafting replies, preparing documentation, and professional assistance during income tax proceedings." },
            { title: "Assessment, appeal, and representation support", desc: "Support during assessments, rectifications, and representation before tax authorities." },
            { title: "Capital gains and special income reporting", desc: "Accurate computation and reporting of capital gains, foreign income, and special income categories." },
            { title: "Year-round tax compliance guidance", desc: "Ongoing advisory support to ensure financial transactions remain tax compliant." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 text-lg">✔</span>
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

{/* TAX NOTICES & COMPLIANCE SUPPORT */}
<div id="tax-notices" className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      Tax Notices & Compliance Support by VISAI
    </h2>

    <p className="mt-5 text-gray-600 max-w-5xl leading-relaxed">
      Receiving a tax notice can be stressful for individuals and businesses.
      Notices may arise due to return mismatches, non-compliance, high-value
      transactions, or system-based scrutiny. VISAI provides structured support
      for handling GST and Income Tax notices, ensuring timely, accurate, and
      professional responses to tax authorities.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

      {[
        {
          title: "Income Tax Notice under Section 139(9)",
          desc: "Issued when a return is considered defective due to missing information, incorrect forms, or mismatch in disclosures. VISAI assists in rectification and timely response to avoid return invalidation.",
        },
        {
          title: "Income Tax Notice under Section 143(1)",
          desc: "System-generated intimation highlighting tax payable, refund status, or mismatches between reported and processed income. We review, verify, and guide corrective action if required.",
        },
        {
          title: "Income Tax Notice under Section 143(2)",
          desc: "Scrutiny notice issued for detailed examination of income, deductions, or claims. VISAI provides documentation support and representation during scrutiny proceedings.",
        },
        {
          title: "Demand Notice under Section 156",
          desc: "Issued when tax, interest, or penalties are payable. We verify demand accuracy, guide rectification filings, or prepare replies to incorrect demands.",
        },
        {
          title: "Show Cause Notice",
          desc: "Issued when tax authorities seek explanation before initiating action. VISAI prepares professional responses supported with facts and documentation.",
        },
        {
          title: "GST Notices & Audit Communications",
          desc: "Includes mismatch notices, ITC reversals, audit communications, and assessment proceedings. We assist with data preparation, reconciliations, and official replies.",
        },
      ].map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <span className="text-[#06923E] mt-1 text-lg">✔</span>
          <div>
            <p className="font-semibold text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</div>

{/* ROC / MCA FILINGS */}
<div id="roc-mca" className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      ROC / MCA Filings & Corporate Compliance Services
    </h2>

    <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
      Companies and LLPs registered under the Ministry of Corporate Affairs
      (MCA) are required to file regular ROC returns, annual compliances, and
      event-based forms. VISAI provides structured ROC and MCA compliance
      support to ensure your entity remains legally compliant and penalty-free.
    </p>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Annual ROC Filings",
          desc: "AOC-4, MGT-7 / MGT-7A, LLP Form 8, and annual compliance filings for companies and LLPs.",
        },
        {
          title: "Director & Shareholder Compliances",
          desc: "DIR-3 KYC, DIN updates, shareholding changes, and director-related filings.",
        },
        {
          title: "Event-Based MCA Filings",
          desc: "Director appointment/resignation, address change, capital increase, and other MCA event compliances.",
        },
        {
          title: "Financial Statement & Audit Support",
          desc: "Preparation and filing support for balance sheet, profit & loss, and statutory records.",
        },
        {
          title: "Company & LLP Amendments",
          desc: "Name change, object change, registered office updates, and structural amendments.",
        },
        {
          title: "End-to-End Corporate Compliance",
          desc: "Ongoing ROC calendar management, reminders, documentation, and filing execution.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group bg-white p-6 rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#06923E] transition">
            {item.title}
          </h3>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</div>


{/* INDIA COMPLIANCE SEO */}
<div className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-14">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      Why GST & Income Tax Compliance is Critical for Indian Businesses
    </h2>

    <div className="mt-8 max-w-5xl space-y-5 text-gray-600 leading-relaxed">

      <p>
        In India, tax compliance is not limited to filing returns. Businesses and
        professionals are required to maintain accurate records, report income
        correctly, reconcile transaction data, and comply with evolving
        regulations under GST and the Income Tax Act.
      </p>

      <p>
        Delays, incorrect filings, or mismatches can lead to penalties, interest,
        loss of input tax credit, and increased scrutiny by tax authorities.
        With digital monitoring systems, non-compliance risks have increased
        significantly in recent years.
      </p>

      <p>
        Structured GST and income tax compliance ensures financial discipline,
        reduces regulatory risk, and supports smoother audits, funding
        processes, and business expansion. Professional compliance management
        enables businesses to focus on operations without worrying about
        regulatory uncertainties.
      </p>

      <p>
        VISAI supports Indian businesses with a dedicated compliance framework
        that integrates GST, income tax, and accounting systems to ensure
        accuracy, continuity, and regulatory confidence throughout the year.
      </p>

    </div>
  </div>
</div>

{/* VISAI USPs – GST & IT */}
<div className="max-w-7xl mx-auto px-6 py-14">

  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
    USPs Offered by VISAI for GST & Income Tax Services
  </h2>

  <p className="mt-5 text-gray-600 max-w-4xl leading-relaxed">
    VISAI provides compliance-focused, structured, and technology-supported
    GST and income tax services designed to reduce regulatory risks and ensure
    long-term financial discipline.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      "Accurate and timely GST & income tax filings",
      "Professional handling of notices, audits, and assessments",
      "Strong reconciliation and compliance systems",
      "Cost-effective compliance outsourcing",
      "Latest tools and regulatory tracking",
      "Year-round compliance and advisory support",
    ].map((item) => (
      <div
        key={item}
        className="flex items-start gap-4 bg-white p-4 rounded-3xl shadow-sm border hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <span className="text-green-600 mt-1">✔</span>
        <p className="text-gray-700 leading-relaxed">{item}</p>
      </div>
    ))}

  </div>
</div>

{/* FAQ – GST & IT */}
<div id="gst-faq" className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      GST & Income Tax – Frequently Asked Questions
    </h2>

    <p className="mt-5 text-gray-600 max-w-3xl leading-relaxed">
      Common questions businesses, professionals, and taxpayers ask about GST
      and income tax compliance services.
    </p>

    <div className="mt-10 space-y-4">

      {[
        {
          q: "Is GST return filing mandatory even if there is no business activity?",
          a: "Yes. Even if there are no transactions, eligible GST-registered businesses are generally required to file NIL returns to remain compliant.",
        },
        {
          q: "Can VISAI handle both GST and income tax compliance together?",
          a: "Yes. VISAI provides integrated GST and income tax compliance support including filings, reconciliations, notices, and reporting.",
        },
        {
          q: "Do you support GST notices and income tax scrutiny cases?",
          a: "Yes. We assist with drafting replies, preparing documentation, and professional support during GST and income tax proceedings.",
        },
        {
          q: "Who needs advance tax payment support?",
          a: "Individuals, professionals, and businesses with taxable income beyond prescribed limits are required to pay advance tax to avoid interest and penalties.",
        },
        {
          q: "Can VISAI manage compliance for startups and small businesses?",
          a: "Absolutely. We work with startups, SMEs, professionals, and companies by building structured compliance systems based on business size and activity.",
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
</div>


{/* CTA */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Need help with GST or Income Tax compliance?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Let VISAI manage your filings while you focus on your business.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-[#06923E] text-white px-10 py-4 rounded-xl font-semibold shadow hover:bg-[#057a34] transition hover:scale-[1.03]"
          >
            Connect with VISAI
          </a>
        </div>
      </div>
      <ScrollToTop />

    </section>
  );
}
