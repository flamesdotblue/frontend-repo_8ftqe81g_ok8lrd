import { Mail, Phone, Check } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-sky-500/10 to-cyan-400/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something remarkable</h2>
            <p className="mt-4 text-gray-700">Share your goals and we’ll propose a clear, actionable plan with timelines, pricing, and outcomes.</p>
            <ul className="mt-6 grid gap-3 text-gray-700">
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-indigo-600" /> Conversion‑focused design</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-indigo-600" /> Clean, modern code</li>
              <li className="flex items-center gap-2"><Check className="h-5 w-5 text-indigo-600" /> Transparent process</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800">Budget</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900">
                    <option>Under $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k – $10k</option>
                    <option>$10k+</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Project details</label>
                <textarea rows="4" placeholder="Tell us about your project" className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900" />
              </div>
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 font-medium text-white hover:bg-gray-800">Request proposal</button>
            </form>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <a href="mailto:hello@codearrival.tech" className="inline-flex items-center gap-2 hover:text-gray-900"><Mail className="h-4 w-4" /> hello@codearrival.tech</a>
              <span className="hidden sm:block text-gray-300">|</span>
              <a href="tel:+10000000000" className="inline-flex items-center gap-2 hover:text-gray-900"><Phone className="h-4 w-4" /> +1 (000) 000‑0000</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
