export default function RegistrationsPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
            Business & Statutory Registrations
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Start your business journey the right way. VISAI provides
            end-to-end support for business, tax, and statutory registrations
            in India with professional guidance at every step.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#06923E] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#057a34] transition"
            >
              Get Registration Support
            </a>

            <a
              href="/contact"
              className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-800 hover:border-[#06923E] hover:text-[#06923E] transition"
            >
              Free Consultation
            </a>
          </div>

        </div>
      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Registration Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
          We assist startups, professionals, and businesses with all major
          registrations required to operate legally and smoothly in India.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            ["Proprietorship Registration", "Simple business setup for individuals starting their professional or trading journey."],
            ["Partnership Firm Registration", "Structured registration support for partnership businesses with proper documentation."],
            ["LLP Registration", "Professional setup for Limited Liability Partnerships with MCA compliance."],
            ["Private Limited Company Registration", "End-to-end company incorporation support from name approval to certification."],
            ["GST Registration", "Hassle-free GST registration with correct structure and compliance guidance."],
            ["MSME / Udyam Registration", "Udyam and MSME registration to unlock government benefits and recognition."],
            ["Startup & Other Registrations", "Support for startup, professional, and special category registrations."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E] transition">
                {title}
              </h3>
              <p className="mt-4 leading-relaxed text-sm text-gray-600">
                {desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* WHO IT'S FOR */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Who Should Use Our Registration Services
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "New business owners & startups",
              "Freelancers & professionals",
              "Small & medium enterprises",
              "Growing companies & entrepreneurs",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* WHY VISAI */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose VISAI for Registrations
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            ["Professional guidance", "Right structure selection and compliance clarity."],
            ["Complete documentation support", "We manage forms, filings, and follow-ups."],
            ["Transparent process", "Clear steps, honest timelines, no confusion."],
            ["Long-term support", "We support beyond registration into compliance and growth."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E] transition">
                {title}
              </h3>
              <p className="mt-4 leading-relaxed text-sm text-gray-600">
                {desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Planning to start a business or need a registration?
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Speak with VISAI and get professional guidance before you take
              the next step.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-[#06923E] text-white px-10 py-4 rounded-xl font-semibold shadow hover:bg-[#057a34] hover:shadow-2xl transition"
          >
            Talk to VISAI
          </a>

        </div>
      </div>

    </section>
  );
}
