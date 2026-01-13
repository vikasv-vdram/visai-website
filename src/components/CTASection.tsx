export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06923E]/10 via-white to-blue-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Let’s take care of your taxes, compliance and finances.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you are a business owner or a taxpayer, our team is here to understand your requirements and provide professional guidance.
            </p>
            <p className="mt-2 text-gray-600">
              Start with a free consultation and let us discuss how VISAI can support you.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-[#06923E] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#057a34] hover:shadow-2xl transition-all duration-300 text-center"
            >
              Get Free Consultation
            </a>

            <a
              href="/services"
              className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-800 hover:border-[#06923E] hover:text-[#06923E] hover:bg-green-50 transition-all duration-300 text-center"
            >
              Explore Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
