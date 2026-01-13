export default function WhyVisai() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why VISAI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built on professionalism, transparency and a long-term vision to support businesses and taxpayers.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {/* Reason 1 */}
  <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#06923E] transition">
      Professional & Structured Approach
    </h3>
    <p className="mt-3 text-sm text-gray-600">
      We follow defined processes and systems to ensure every client receives consistent and reliable service.
    </p>
  </div>

  {/* Reason 2 */}
  <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition">
      Transparent & Honest Guidance
    </h3>
    <p className="mt-3 text-sm text-gray-600">
      Clear communication, ethical practices and guidance focused on your real business needs.
    </p>
  </div>

  {/* Reason 3 */}
  <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-600 transition">
      End-to-End Support
    </h3>
    <p className="mt-3 text-sm text-gray-600">
      From registrations and filings to accounting and wealth support — all under one professional roof.
    </p>
  </div>

  {/* Reason 4 */}
  <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-600 transition">
      Platform & Tools Vision
    </h3>
    <p className="mt-3 text-sm text-gray-600">
      We are building smart tools and systems to make compliance and finance easier and more accessible.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}
