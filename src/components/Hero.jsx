import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays that don't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span>Cutting-edge web and mobile experiences</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            We Code Your Vision Into Reality
            <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Codearrival Tech</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-700">
            Custom Web & App Development, AI Integrations, and Scalable SaaS Solutions. We blend design, engineering, and performance to ship products that grow with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
