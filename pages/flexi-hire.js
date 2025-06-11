import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import Meta from "../components/Meta";

export default function FlexiHire() {
  const products = [
    "Small van",
    "Medium van",
    "LWB Van",
    "Crew Van",
    "Tipper Van",
    "Luton Tail lift",
  ];
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Meta
        title="Flexi Hire"
        description="Flexible vehicle hire options for your business."
        canonical="https://www.rouleurco.com/flexi-hire"
        image="/images/sales-leadership.png"
      />

      <header className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D1B2A]">Flexi Hire</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Choose from a range of vehicles on flexible terms to keep your fleet moving.
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mb-20">
        {products.map((product) => (
          <Card key={product}>
            <CardContent className="p-6 text-center">
              <Image
                src="/images/sales-leadership.png"
                alt={product}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product}</h2>
              <p>Flexible hire available for {product.toLowerCase()}.</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
