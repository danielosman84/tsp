import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="TSP Logo" width={100} height={50} />
          <span className="font-bold text-xl">TSP Vehicle Solutions</span>
        </div>

        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/services">Flex Hire</Link>
          <Link href="/daily">Daily Hire</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          01793 550340
        </Link>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} md:hidden bg-white border-b shadow-sm`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link href="/" className="block" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="block" onClick={() => setOpen(false)}>
            Flex Hire
          </Link>
          <Link href="/daily" className="block" onClick={() => setOpen(false)}>
            Daily Hire
          </Link>
          <Link href="/about" className="block" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/blog" className="block" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/faq" className="block" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </div>
      </nav>
    </header>
  );
}
