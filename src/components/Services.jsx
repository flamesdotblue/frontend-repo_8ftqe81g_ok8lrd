import { Code, Smartphone, Palette, Brain, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Code,
    desc: 'High-performance websites and SaaS platforms built with modern stacks.'
  },
  {
    title: 'Mobile Apps',
    icon: Smartphone,
    desc: 'Cross‑platform mobile experiences that feel native and scale gracefully.'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    desc: 'User-first design systems and interfaces that convert and delight.'
  },
  {
    title: 'AI Automation',
    icon: Brain,
    desc: 'Integrate AI agents, chat, and automation to streamline workflows.'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Reliable infrastructure, CI/CD, monitoring, and cost-optimized deployments.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/40 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
          <p className="mt-4 text-gray-700">
            End‑to‑end capabilities to ship modern products — from concept to scale.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="mt-4 text-sm text-gray-500">
                Micro‑interactions, accessibility, and performance included by default.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
