import type { Product } from "./page";

export function ProductDetail({ products }: { products: Product[] }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products</h1>

      <form className="my-3">
        <input
          name="query"
          placeholder="Search products..."
          className="border p-2 mr-2"
        />
        <button type="submit" className="border px-3 py-2">
          Search
        </button>
      </form>

      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="border p-3 rounded">
            <div className="font-bold">{p.title}</div>
            <div>${p.price}</div>
            <div className="text-sm">{p.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}