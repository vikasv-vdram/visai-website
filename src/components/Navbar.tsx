"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
<a href="/" className="flex items-center gap-2">
  <img
    src="/logo.svg"
    alt="VISAI Tax & Accounting Professionals"
    className="h-9 w-auto"
  />

  <span className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-[#06923E] transition">
    VISAI Pro 
  </span>
</a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">

          <div className="relative group">
<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
  Registrations

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-4 w-[360px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="grid grid-cols-2 gap-4 p-5 text-sm text-gray-700">

      <a href="/services/registrations" className="hover:text-[#06923E]">Proprietorship Registration</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">Partnership Firm Registration</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">LLP Registration</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">Private Limited Company</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">GST Registration</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">MSME / Udyam Registration</a>
      <a href="/services/registrations" className="hover:text-[#06923E]">Startup & Other Registrations</a>

    </div>
  </div>
</div>

          <div className="relative group">
<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
  Accounting

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-4 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="grid grid-cols-2 gap-4 p-5 text-sm text-gray-700">

      <a href="/services/accounting" className="hover:text-[#06923E]">Outsourced Accounting Services</a>
      <a href="/services/accounting" className="hover:text-[#06923E]">Dedicated Accounting Support</a>
      <a href="/services/accounting" className="hover:text-[#06923E]">Bookkeeping</a>
      <a href="/services/accounting" className="hover:text-[#06923E]">Accounting & Finalization</a>
      <a href="/services/accounting" className="hover:text-[#06923E]">Payroll Management</a>
      <a href="/services/accounting" className="hover:text-[#06923E]">MIS & Financial Reporting</a>

    </div>
  </div>
</div>

          <div className="relative group">

<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
    GST & IT Filings

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-4 w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="grid grid-cols-2 gap-4 p-5 text-sm text-gray-700">

      <a href="/services/gst-it-filings#gst-services" className="hover:text-[#06923E]">GST Return Filing</a>
      <a href="/services/gst-it-filings#it-services" className="hover:text-[#06923E]">Income Tax Return Filing</a>
      <a href="/services/gst-it-filings#it-services" className="hover:text-[#06923E]">TDS Return Filing</a>
      <a href="/services/gst-it-filings#it-detailed" className="hover:text-[#06923E]">Compliance Management</a>
      <a href="/services/gst-it-filings#tax-notices" className="hover:text-[#06923E]">Notices, Scrutiny & Support</a>
      <a href="/services/gst-it-filings#roc-mca" className="hover:text-[#06923E]">ROC / MCA Filings</a>

    </div>
  </div>
</div>

          <div className="relative group">
<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
  Wealth

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-4 w-[380px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="grid grid-cols-1 gap-3 p-5 text-sm text-gray-700">

      <a href="#" className="hover:text-[#06923E]">Mutual Fund Advisory</a>
      <a href="#" className="hover:text-[#06923E]">Insurance Planning</a>
      <a href="#" className="hover:text-[#06923E]">Loan Advisory</a>
      <a href="#" className="hover:text-[#06923E]">Financial Planning</a>
      <a href="#" className="hover:text-[#06923E]">Tax Saving & Investment Planning</a>

    </div>
  </div>
</div>

          <div className="relative group">
<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
  Tools

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

  {/* TOOLS MEGA MENU */}
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[1100px] bg-white rounded-3xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

    <div className="grid grid-cols-5 gap-6 p-8 text-sm text-gray-700">

      {/* Column 1 */}
      <div>
        <p className="font-semibold text-gray-900 mb-3">Tax Planning</p>
        <ul className="space-y-2">
          <li>Income Tax Calculator</li>
          <li>GST Calculator</li>
          <li>Old vs New Tax Regime</li>
          <li>TDS Salary Calculator</li>
          <li>Advance Tax Planner</li>
          <li>GST Composition Scheme</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <p className="font-semibold text-gray-900 mb-3">Business Tools</p>
        <ul className="space-y-2">
          <li>HSN / SAC Code Finder</li>
          <li>Freelancer Tax Calculator</li>
          <li>Import Duty Calculator</li>
          <li>Profit & Loss Calculator</li>
          <li>Break-even Analysis</li>
          <li>Working Capital Calculator</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <p className="font-semibold text-gray-900 mb-3">Loan Management</p>
        <ul className="space-y-2">
          <li>Home Loan EMI</li>
          <li>Personal Loan EMI</li>
          <li>Car Loan EMI</li>
          <li>Loan Prepayment</li>
          <li>Loan Comparison Tool</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <p className="font-semibold text-gray-900 mb-3">Investment Planning</p>
        <ul className="space-y-2">
          <li>SIP Calculator</li>
          <li>FD / PPF Calculator</li>
          <li>Mutual Fund Returns</li>
          <li>NPS Calculator</li>
          <li>Compound Interest Tool</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div>
        <p className="font-semibold text-gray-900 mb-3">Insurance & Utilities</p>
        <ul className="space-y-2">
          <li>Term Insurance Calculator</li>
          <li>Health / Motor Insurance</li>
          <li>ULIP Estimator</li>
          <li>Coverage Gap Tool</li>
          <li>Salary Take-Home Calculator</li>
          <li>Emergency Fund Planner</li>
          <li>Retirement Planner</li>
          <li>Inflation Impact Tool</li>
        </ul>
      </div>

    </div>

    {/* Bottom Highlight Bar */}
    <div className="bg-gray-50 border-t border-gray-100 px-8 py-4 flex justify-between items-center rounded-b-3xl">
      <p className="text-sm text-gray-700">
        Building India’s smart finance & compliance tool platform.
      </p>
      <span className="text-sm font-semibold text-[#06923E]">
        Explore all tools →
      </span>
    </div>

  </div>
</div>

          <div className="relative group">

<button className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#06923E] transition">
  VISAI Media

  <svg
    className="w-4 h-4 text-gray-500 group-hover:text-[#06923E] transition"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>


  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-4 w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
    <div className="grid grid-cols-1 gap-3 p-5 text-sm text-gray-700">

      <a href="#" className="hover:text-[#06923E]">Compliance News</a>
      <a href="#" className="hover:text-[#06923E]">GST & Tax Updates</a>
      <a href="#" className="hover:text-[#06923E]">Blogs & Guides</a>
      <a href="#" className="hover:text-[#06923E]">Business Education</a>
      <a href="#" className="hover:text-[#06923E]">Announcements & Alerts</a>

    </div>
  </div>
</div>

          <a href="/contact" className="cursor-pointer hover:text-[#06923E]">Contact</a>

        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="/contact"
            className="bg-[#06923E] text-white px-5 py-2 rounded-xl font-semibold shadow hover:bg-[#057a34] transition"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
{mobileOpen && (
  <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">

    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-xl font-bold text-gray-900">VISAI</div>
      <button
        className="text-3xl"
        onClick={() => setMobileOpen(false)}
      >
        ✕
      </button>
    </div>

    <div className="px-6 py-8 space-y-6 text-gray-800 font-medium">

      <div>Registrations</div>
      <div>Accounting</div>
      <div>GST & IT Filings</div>
      <div>Wealth</div>
      <div>Tools</div>
      <div>VISAI Media</div>
      <a href="/contact" className="block">Contact</a>

      <div className="pt-6">
        <a
          href="/contact"
          className="block w-full text-center bg-[#06923E] text-white px-5 py-3 rounded-xl font-semibold shadow"
        >
          Free Consultation
        </a>
      </div>

    </div>
  </div>
)}

    </header>
  );
}
