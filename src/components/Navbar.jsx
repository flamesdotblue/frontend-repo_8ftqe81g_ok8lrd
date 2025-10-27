import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-600 via-sky-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-gray-900">Codearrival Tech</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#work" className="text-gray-700 hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Get a quote</a>
          </nav>
          <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a href="#services" className="py-2">Services</a>
              <a href="#work" className="py-2">Portfolio</a>
              <a href="#contact" className="py-2">Contact</a>
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800">Get a quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
