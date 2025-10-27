import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'SaaS Analytics Dashboard',
    tag: 'Product UI',
    gradient: 'from-indigo-500 via-sky-500 to-cyan-400'
  },
  {
    name: 'E‑commerce Experience',
    tag: 'Growth',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500'
  },
  {
    name: 'Marketing Microsite',
    tag: 'Campaign',
    gradient: 'from-amber-400 via-orange-500 to-red-500'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
            <p className="mt-3 max-w-2xl text-gray-700">A peek at the kinds of digital experiences we create.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 hover:bg-gray-50">
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
              <div className={`aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br ${p.gradient}`}>
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent_40%)]" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 group-hover:bg-gray-50">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
