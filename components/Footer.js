import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}
