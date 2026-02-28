"use client";

const REPORT_DATA = {
  status: "OK",
  summary:
    "This 1949 home has undergone several permitted updates, including structural, roofing, and some plumbing/electrical work, primarily between 2014 and 2019.",
  good_points: [
    "Foundation/cripple wall reinforcement permitted on 2014-08-29 suggests structural improvements.",
    "A re-roof permit from 2014-08-21 indicates a newer roof system was installed.",
    "Interior bathroom remodel/repair permitted on 2014-08-26 suggests updated finishes.",
    "Recent plumbing work permitted on 2019-10-31 and 2014-12-18 could mean some updated piping.",
    "Electrical permits from 2015-01-20 and 2014-12-18 suggest some system upgrades.",
  ],
  bad_points: [
    "Original plumbing (based on age) may still be present in some areas, potentially lead or galvanized.",
    "Original electrical wiring (based on age) could exist, possibly knob-and-tube or ungrounded circuits.",
    "HVAC system (based on age) may be original or outdated, requiring inspection for efficiency and safety.",
    "Sewer lines (based on age) could be cast iron or clay, prone to root intrusion or collapse.",
    "The ADU claim for a detached garage should be verified for proper permitting and habitability.",
  ],
  questions_to_ask: [
    "Can you provide details of the scope of the 2014 structural and roofing work?",
    "What specific plumbing components were updated with the 2019 and 2014 permits?",
    "Are there any records of the last full electrical system upgrade beyond the 2014/2015 permits?",
    "What is the age and service history of the HVAC system and water heater?",
    "Is the detached garage ADU fully permitted and up to current code for occupancy?",
  ],
};

const NEARBY_INSPECTORS = [
  { name: "ABC Home Inspections", phone: "(555) 123-4567", rating: "4.5" },
  { name: "SoCal Inspect Pro", phone: "(555) 987-6543", rating: "4.5" },
];

const GOOD_POINT_CATEGORIES = [
  "STRUCTURAL",
  "ROOFING",
  "INTERIOR",
  "PLUMBING",
  "ELECTRICAL",
];

const BAD_POINT_CATEGORIES = [
  "PLUMBING",
  "ELECTRICAL",
  "HVAC",
  "SEWER",
  "PERMIT",
];

const cardShadow = "0 4px 24px rgba(0, 0, 0, 0.06)";
const cardShadowLg = "0 8px 40px rgba(0, 0, 0, 0.08)";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Navbar — clean, minimal, spread-out links, pill CTA */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#f5f0e8]/80 px-6 py-5 backdrop-blur-md md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7ba3c4] text-white">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            HomeInspectAI
          </span>
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Contact
          </a>
        </div>
        <a
          href="#"
          className="rounded-full bg-[#7ba3c4] px-6 py-2.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(123,163,196,0.35)] transition hover:bg-[#6b93b4]"
        >
          New Inspection
        </a>
      </nav>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        {/* Glassmorphism floating card — wraps main report content */}
        <div
          className="rounded-3xl border border-white/60 bg-white/75 p-8 shadow-[0_8px_48px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-10 md:p-12"
          style={{ boxShadow: cardShadowLg }}
        >
          {/* Report Header */}
          <header className="mb-16">
            <h1 className="font-serif-display mb-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Your Home Inspection Results Are Ready
            </h1>
            <div className="mb-5 flex items-center gap-2 text-gray-700">
              <svg
                className="h-5 w-5 shrink-0 text-[#7ba3c4]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-base">742 Evergreen Terrace, Los Angeles, CA 90012</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1.5 rounded-full bg-gray-100/80 px-4 py-2">
                <svg
                  className="h-4 w-4 text-[#7ba3c4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Built 1949
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5 rounded-full bg-gray-100/80 px-4 py-2">
                <svg
                  className="h-4 w-4 text-[#7ba3c4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Permits: 2014-2019
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1.5 rounded-full bg-gray-100/80 px-4 py-2">
                <svg
                  className="h-4 w-4 text-[#7ba3c4]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                ADU Claimed
              </span>
            </div>
          </header>

          {/* AI Summary Card */}
          <section
            className="mb-16 overflow-hidden rounded-2xl bg-white/90"
            style={{ boxShadow: cardShadow }}
          >
            <div className="h-1 w-full bg-[#b8d4e8]" />
            <div className="p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#7ba3c4]" />
                <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                  AI Summary
                </h2>
              </div>
              <p className="leading-relaxed text-gray-700">{REPORT_DATA.summary}</p>
            </div>
          </section>

          {/* Score Overview Cards */}
          <section className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div
              className="rounded-2xl bg-white/90 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              style={{ boxShadow: cardShadow }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#b8d4e8] text-[#5a8ab0]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {REPORT_DATA.good_points.length}
              </p>
              <p className="text-sm font-medium text-gray-700">Good Points</p>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-[#7ba3c4]" />
            </div>
            <div
              className="rounded-2xl bg-white/90 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              style={{ boxShadow: cardShadow }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {REPORT_DATA.bad_points.length}
              </p>
              <p className="text-sm font-medium text-gray-700">Bad Points</p>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-amber-500" />
            </div>
            <div
              className="rounded-2xl bg-white/90 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              style={{ boxShadow: cardShadow }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {REPORT_DATA.questions_to_ask.length}
              </p>
              <p className="text-sm font-medium text-gray-700">Questions to Ask</p>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-sky-500" />
            </div>
          </section>

          {/* Good Points Section */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8d4e8] text-[#5a8ab0]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
              Good Points
            </h2>
            <ul className="space-y-5">
              {REPORT_DATA.good_points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-[#b8d4e8]/60 bg-white/90 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                  style={{ boxShadow: cardShadow }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7ba3c4] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="flex-1 text-gray-700">{point}</p>
                  <span className="shrink-0 rounded-full bg-[#d4e8f5] px-3 py-1.5 text-xs font-semibold text-[#5a8ab0]">
                    {GOOD_POINT_CATEGORIES[i]}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bad Points Section */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </span>
              Bad Points
            </h2>
            <ul className="space-y-5">
              {REPORT_DATA.bad_points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-amber-200/60 bg-white/90 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                  style={{ boxShadow: cardShadow }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="flex-1 text-gray-700">{point}</p>
                  <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    {BAD_POINT_CATEGORIES[i]}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Questions to Ask Section */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
              Questions to Ask Your Agent
            </h2>
            <ul className="space-y-5">
              {REPORT_DATA.questions_to_ask.map((question, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-sky-200/60 bg-white/90 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                  style={{ boxShadow: cardShadow }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="flex-1 text-gray-700">{question}</p>
                  {i === 0 && (
                    <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
                      {REPORT_DATA.questions_to_ask.length} questions
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Nearby Inspection Companies */}
          <section className="mb-16">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-bold text-gray-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              Nearby Inspection Companies
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {NEARBY_INSPECTORS.map((company, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/90 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                  style={{ boxShadow: cardShadow }}
                >
                  <h3 className="mb-2 font-bold text-gray-900">{company.name}</h3>
                  <p className="mb-2 text-sm text-gray-600">{company.phone}</p>
                  <p className="mb-5 flex items-center gap-1.5 text-sm text-gray-600">
                    <svg
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {company.rating} rating
                  </p>
                  <button
                    type="button"
                    className="w-full rounded-full bg-[#7ba3c4] px-5 py-2.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(123,163,196,0.35)] transition hover:bg-[#6b93b4]"
                  >
                    Contact Company
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Action Buttons */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7ba3c4] px-8 py-3.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(123,163,196,0.35)] transition hover:bg-[#6b93b4]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Find More Inspectors
            </button>
            <a
              href="/inspect"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#7ba3c4] bg-white/80 px-8 py-3.5 text-sm font-medium text-[#7ba3c4] backdrop-blur-sm transition hover:bg-[#f0f7fc]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Inspect Another Home
            </a>
          </div>

          {/* Disclaimer */}
          <footer className="flex items-start gap-3 text-sm text-gray-500">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <p>
              This report is for informational purposes only and does not replace
              a professional home inspection. Always consult a licensed inspector
              before making purchasing decisions.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
