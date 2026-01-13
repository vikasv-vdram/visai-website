export default function ContactPage() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Connect with VISAI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Whether you are a business owner or a taxpayer, our team is here to
            understand your requirements and provide professional guidance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            <h2 className="text-xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <p className="mt-3 text-gray-600">
              Reach out to us through any of the following channels.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">

  <a
    href="tel:+917741807978"
    className="block hover:text-[#06923E] transition"
  >
    📞 <span className="font-medium">Call:</span> +91 77418 07978
  </a>

  <a
    href="https://wa.me/917741807978"
    target="_blank"
    className="block hover:text-[#06923E] transition"
  >
    💬 <span className="font-medium">WhatsApp:</span> +91 77418 07978
  </a>

  <a
    href="mailto:support@visaipro.in"
    className="block hover:text-[#06923E] transition"
  >
    📧 <span className="font-medium">Email:</span> support@visaipro.in
  </a>

              <div className="hover:text-[#06923E] transition">
                📍 <span className="font-medium">Serving:</span> Clients across India
              </div>

            </div>

            <div className="mt-8 p-5 bg-green-50 rounded-2xl border border-green-100 text-sm text-gray-700">
              Our consultations are focused on understanding your needs first, 
              followed by clear guidance on the best possible approach.
            </div>

          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            <h2 className="text-xl font-semibold text-gray-900">
              Request a Free Consultation
            </h2>

            <form
  action="https://formspree.io/f/mwvveoko"
  method="POST"
  className="mt-6 grid grid-cols-1 gap-5"
>

              <input
  type="text"
  name="name"
  placeholder="Full Name"
  required
  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#06923E]"
/>


              <input
  type="tel"
  name="mobile"
  placeholder="Mobile Number"
  required
  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#06923E]"
/>


              <input
  type="email"
  name="email"
  placeholder="Email Address"
  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#06923E]"
/>


              <select
  name="service"
  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#06923E] text-gray-600"
>
                <option>Select Service</option>
                <option>Business Registrations</option>
                <option>Accounting Services</option>
                <option>GST & IT Filings</option>
                <option>Compliance Management</option>
                <option>Wealth & Financial Advisory</option>
                <option>Other</option>
              </select>

              <textarea
  name="message"
  placeholder="Tell us about your requirement"
  rows={4}
  className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#06923E]"
></textarea>


              <button
                type="submit"
                className="bg-[#06923E] text-white py-3 rounded-xl font-semibold hover:bg-[#057a34] transition shadow"
              >
                Submit Request
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
