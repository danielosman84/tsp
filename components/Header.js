import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="TSP Logo" width={100} height={50} />
          <span className="font-bold text-xl">TSP Vehicle Solutions</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/flexi-hire">Flex Hire</Link>
          <Link href="/daily">Daily Hire</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          01793 550340
        </Link>
      </div>
    </header>
  );
}
