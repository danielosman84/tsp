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

      {/* Empowering Drive Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-64 bg-gray-200 rounded" />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              TSP Vehicle Solutions: Empowering Your Drive!
            </h2>
            <p className="mb-4">
              At TSP, we&rsquo;re not just redefining mobility; we&rsquo;re putting YOU in the driver&rsquo;s seat of innovation. Buckle up for a journey where flexibility meets mastery, and your success is our destination.
            </p>
            <p className="mb-6 font-semibold">
              "Complete the Contact Form for a Swift Response – Your Solution is Just a Click Away!"
            </p>
            <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md inline-block">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Flexible Hire</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 bg-gray-200 mx-auto mb-4 rounded-full" />
                <p className="text-gray-700">Benefit description</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global footer is rendered in _app */}
    </main>
  );
}
