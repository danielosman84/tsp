import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import Meta from "../components/Meta";

export default function Products() {
  const products = [
    "Small van",
    "Medium van",
    "LWB Van",
    "Crew Van",
    "Tipper Van",
    "Luton Tail lift",
  ];

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <Meta
        title="Products"
        description="Explore our range of vehicles available for hire."
        canonical="https://www.rouleurco.com/products"
        image="/images/sales-leadership.png"
      />
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p>Learn more about our {product.toLowerCase()} options.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
