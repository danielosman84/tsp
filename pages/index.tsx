import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" alt="TSP Logo" width={100} height={50} />
            <span className="font-bold text-xl">TSP Vehicle Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/services">Flex Hire</Link>
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

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-yellow-300 to-yellow-400">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Welcome to TSP Vehicle Solutions,<br />
          your premier choice for Swindon car and van hire.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-800">
          We specialize in providing top-quality vehicles tailored for business needs across Swindon and beyond.
        </p>
        <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md text-lg inline-block">
          Get in touch
        </Link>
        <div className="mt-10 flex justify-center">
          <Image src="/hero-van.png" alt="TSP Vehicles" width={600} height={300} />
        </div>
        <p className="mt-6 italic text-xl text-gray-800 font-script">Putting You In The Driving Seat</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">TSP Vehicle Solutions</h3>
            <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="space-y-2">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div>
            <p>Phone: 01793 550340</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
