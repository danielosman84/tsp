import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

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

      {/* Global footer is rendered in _app */}
    </main>
  );
}
