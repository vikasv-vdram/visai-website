import { FileText, Layers, ShieldCheck } from "lucide-react"; 
import ScrollToTop from "@/components/ScrollToTop";

export default function RegistrationsPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-18 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Business & Statutory Registrations
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
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

          {/* RIGHT ILLUSTRATION */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
            <img
              src="/illustrations/registrations.svg"
              alt="Business & Statutory Registrations"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>

{/* SERVICES */}
<div className="max-w-7xl mx-auto px-6 py-14">

  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
    Our Registration Services
  </h2>

  <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
    We assist startups, professionals, and businesses with all major
    registrations required to operate legally and smoothly in India.
  </p>

  <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: "Proprietorship Registration",
        desc: "Simple business setup for individuals starting their professional or trading journey.",
        link: "proprietorship",
      },
      {
        title: "Partnership Firm Registration",
        desc: "Structured registration support for partnership businesses with proper documentation.",
        link: "partnership",
      },
      {
        title: "LLP Registration",
        desc: "Professional setup for Limited Liability Partnerships with MCA compliance.",
        link: "llp",
      },
      {
        title: "Private Limited Company Registration",
        desc: "End-to-end company incorporation support from name approval to certification.",
        link: "private-limited",
      },
      {
        title: "GST Registration",
        desc: "Hassle-free GST registration with correct structure and compliance guidance.",
        link: "gst",
      },
      {
        title: "MSME / Udyam Registration",
        desc: "Udyam and MSME registration to unlock government benefits and recognition.",
        link: "msme-startup",
      },
      {
        title: "Startup & Other Registrations",
        desc: "Support for startup, professional, and special category registrations.",
        link: "msme-startup",
      },
    ].map((service) => (
      <div
        key={service.title}
        className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E] transition">
          {service.title}
        </h3>

        <p className="mt-4 leading-relaxed text-sm text-gray-600">
          {service.desc}
        </p>

        <a
          href={`/services/registrations#${service.link}`}
          className="inline-block mt-4 text-sm text-[#06923E] font-medium hover:underline hover:translate-x-1 transition-all"
        >
          View detailed requirements →
        </a>
      </div>
    ))}

  </div>
</div>


      {/* DETAILED REGISTRATION GUIDE */}
<div id="registration-guidance" className="bg-gray-50 scroll-mt-28">

  <div className="max-w-7xl mx-auto px-6 py-20">

    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
      Registration Guidance & Requirements
    </h2>
<div className="mt-6 inline-block bg-green-50 border border-green-100 text-green-700 text-sm px-4 py-2 rounded-full">
  VISAI Expert Guidance • Structure • Documentation • Compliance
</div>

    <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
      Choosing the right registration is the foundation of your business.
      Below is a simplified overview of major registration types, required
      documents, and how VISAI supports you through the process.
    </p>

    <div className="mt-14 space-y-14">

{/* Proprietorship */}
<div id="proprietorship" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all scroll-mt-28">

  <div className="flex items-center gap-3">
    <Layers className="text-[#06923E]" />
    <h3 className="text-xl font-semibold text-gray-900">
      Proprietorship Registration
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    Best suited for individuals starting small businesses, freelancers,
    and professionals looking for a simple structure with minimal compliance.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Documents Required</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>PAN Card</li>
        <li>Aadhaar Card</li>
        <li>Photograph</li>
        <li>Address proof</li>
        <li>Business address proof</li>
        <li>Bank details</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Basic Process</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>Business structure guidance</li>
        <li>Registration & licensing</li>
        <li>GST (if applicable)</li>
        <li>Current account support</li>
      </ul>
    </div>

    <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-600" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>Right structure selection</li>
        <li>Complete documentation</li>
        <li>Government filings</li>
        <li>Post-registration support</li>
      </ul>
    </div>

  </div>
</div>

{/* PARTNERSHIP REGISTRATION */}
<div id="partnership" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all scroll-mt-28">

  <div className="flex items-center gap-3">
    <Layers className="text-purple-600" />
    <h3 className="text-xl font-semibold text-gray-900">
      Partnership Firm Registration
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    Partnership firms are suitable when two or more individuals come together
    to run a business with shared responsibilities and capital contribution.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Documents Required</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>PAN of partners</li>
        <li>Aadhaar of partners</li>
        <li>Photographs</li>
        <li>Business address proof</li>
        <li>Partnership deed</li>
        <li>Bank details</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Basic Process</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>Business structure discussion</li>
        <li>Drafting of partnership deed</li>
        <li>Registration & PAN</li>
        <li>GST & licenses (if applicable)</li>
      </ul>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-700" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>Deed preparation</li>
        <li>Complete filings</li>
        <li>Compliance planning</li>
        <li>Accounting & tax setup</li>
      </ul>
    </div>

  </div>
</div>

{/* LLP REGISTRATION */}
<div id="llp" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all scroll-mt-28">

  <div className="flex items-center gap-3">
    <Layers className="text-blue-600" />
    <h3 className="text-xl font-semibold text-gray-900">
      LLP Registration
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    Limited Liability Partnership (LLP) combines flexibility of a partnership
    with the benefits of limited liability, making it suitable for growing
    professional and business ventures.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Documents Required</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>PAN & Aadhaar of partners</li>
        <li>Photographs</li>
        <li>Business address proof</li>
        <li>Email & mobile number</li>
        <li>Capital contribution details</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Basic Process</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>DSC & DIN application</li>
        <li>Name reservation</li>
        <li>LLP incorporation filing</li>
        <li>LLP agreement drafting</li>
      </ul>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-700" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>End-to-end MCA handling</li>
        <li>Agreement drafting support</li>
        <li>Compliance calendar setup</li>
        <li>Accounting & tax planning</li>
      </ul>
    </div>

  </div>
</div>

{/* PRIVATE LIMITED COMPANY REGISTRATION */}
<div id="private-limited" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all scroll-mt-28">

  <div className="flex items-center gap-3">
    <Layers className="text-purple-600" />
    <h3 className="text-xl font-semibold text-gray-900">
      Private Limited Company Registration
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    Private Limited Company is the most preferred structure for startups and
    scalable businesses, offering legal recognition, investor confidence, and
    limited liability protection.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Documents Required</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>PAN & Aadhaar of directors</li>
        <li>Photographs</li>
        <li>Registered office proof</li>
        <li>Email & mobile number</li>
        <li>Shareholding structure</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Basic Process</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>DSC & DIN generation</li>
        <li>Name reservation (MCA)</li>
        <li>Incorporation filing</li>
        <li>Certificate issuance</li>
      </ul>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-700" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>Structure planning</li>
        <li>MCA end-to-end handling</li>
        <li>Post-incorporation support</li>
        <li>Compliance & taxation setup</li>
      </ul>
    </div>

  </div>
</div>

{/* GST REGISTRATION */}
<div id="gst" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all scroll-mt-28">

  <div className="flex items-center gap-3">
    <FileText className="text-blue-600" />
    <h3 className="text-xl font-semibold text-gray-900">
      GST Registration
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    GST registration is mandatory for businesses crossing turnover limits,
    operating interstate, or selling through online platforms.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Documents Required</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>PAN of business</li>
        <li>Aadhaar of authorised signatory</li>
        <li>Business address proof</li>
        <li>Bank proof</li>
        <li>Photographs</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Basic Process</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>Eligibility assessment</li>
        <li>Application filing</li>
        <li>Verification & OTP</li>
        <li>GSTIN generation</li>
      </ul>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-700" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>Correct GST structure</li>
        <li>Application handling</li>
        <li>Notice support</li>
        <li>Return filing guidance</li>
      </ul>
    </div>

  </div>
</div>

{/* MSME & STARTUP REGISTRATIONS */}
<div id="msme-startup" className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all ">

  <div className="flex items-center gap-3">
    <FileText className="text-orange-600" />
    <h3 className="text-xl font-semibold text-gray-900">
      MSME, Startup & Other Registrations
    </h3>
  </div>

  <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
    Government and startup-related registrations help businesses gain legal
    recognition, access benefits, subsidies, banking support, and growth
    opportunities.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <FileText size={18} className="text-[#E67514]" />
        <h4 className="font-semibold text-gray-900">Common Registrations</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>MSME / Udyam Registration</li>
        <li>Startup India Registration</li>
        <li>Professional Tax</li>
        <li>Shop Act / Gumasta</li>
        <li>Import Export Code (IEC)</li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Layers size={18} className="text-blue-600" />
        <h4 className="font-semibold text-gray-900">Purpose & Benefits</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 list-disc ml-4">
        <li>Government scheme access</li>
        <li>Business recognition</li>
        <li>Banking & funding support</li>
        <li>Regulatory compliance</li>
        <li>Startup ecosystem entry</li>
      </ul>
    </div>

    <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <ShieldCheck size={18} className="text-green-700" />
        <h4 className="font-semibold text-gray-900">VISAI Support</h4>
      </div>

      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-4">
        <li>Eligibility assessment</li>
        <li>Application handling</li>
        <li>Document preparation</li>
        <li>End-to-end follow-ups</li>
      </ul>
    </div>

  </div>
</div>


    </div>
  </div>
</div>

      {/* WHO IT'S FOR */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
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

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-[#06923E] pl-4">
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
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Planning to start a business or need a registration?
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Speak with VISAI and get professional guidance before you take the next step.
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
<ScrollToTop />

    </section>
  );
}
