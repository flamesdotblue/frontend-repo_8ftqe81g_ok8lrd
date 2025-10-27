import { Code, Monitor, Rocket, Shield, Smartphone, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    icon: Monitor,
    desc: 'Delightful, conversion-focused interfaces tailored to your brand.'
  },
  {
    title: 'Web Development',
    icon: Code,
    desc: 'Robust, scalable frontends and backends with modern stacks.'
  },
  {
    title: 'Performance & SEO',
    icon: Rocket,
    desc: 'Blazing-fast load times and technical SEO that ranks and converts.'
  },
  {
    title: 'Security & Best Practices',
    icon: Shield,
    desc: 'Hardened setups, audits, and best practices baked into every build.'
  },
  {
    title: 'Mobile-Ready Experiences',
    icon: Smartphone,
    desc: 'Responsive, accessible, and polished on every device.'
  },
  {
    title: 'Creative Micro‑interactions',
    icon: Sparkles,
    desc: 'Subtle motion and interaction that elevate user delight.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-4 text-gray-700">Everything you need to go from idea to polished product.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-4 text-sm text-gray-500">Timeline, pricing, and deliverables tailored to your goals.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
