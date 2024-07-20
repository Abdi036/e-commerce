import products from "../../public/products.json";
import Item from "../components/Items";

export default function Phone() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Phones</h1>
        <p className="text-gray-600">Discover the best deals on Phones</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter((product) => product.type === "phone")
          .map((product) => (
            <Item key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
