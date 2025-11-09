import { Cards } from "./Cards";

export function ProductListings({ productsData, onAdd, onRemove, onDelete, cart }) {
  return (
    <section className="max-w-full ">
      <h1 className="text-4xl font-bold mb-6">Desserts</h1>
      <div className="grid md:grid-cols-3 gap-4  ">
        {productsData.map((product, index) => (
          <Cards
            key={index}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
            cart={cart}
          />
        ))}
      </div>
    </section>
  );
}
