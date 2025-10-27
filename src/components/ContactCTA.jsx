export default function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Have an idea? Let’s build it together.</h2>
            <p className="mt-3 text-gray-600 max-w-xl">Tell us about your goals, timeline and budget. We’ll reply within 1–2 business days with next steps.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hello@codearrival.tech" className="inline-flex items-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">Email us</a>
              <a href="#" className="inline-flex items-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-black/10 hover:bg-gray-50">Download deck</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Prefer a call? Book a 15‑min intro chat. No pressure.</div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project details</label>
                <textarea className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={4} placeholder="What are you looking to build?" />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">Request proposal</button>
              <p className="text-xs text-gray-500">By clicking, you agree to our friendly privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
