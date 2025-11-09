import { useState } from "react";
import { CartButton } from "./CartButton";

export function Cards({ product, onAdd, onRemove, onDelete, cart }) {
  const [count, setCount] = useState(0);
  const [shownCounter, setShownCounter] = useState(false);

  return (
    <section className="flex flex-col max-w-xs font-medium">
      <div className="flex relative justify-center mb-5 ">
        <img
          className="rounded-2xl "
          src={product.image.desktop}
          alt="Imagen del producto"
        />

        <CartButton
          count={count}
          setCount={setCount}
          shownCounter={shownCounter}
          setShownCounter={setShownCounter}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          product={product}
          cart={cart}
        />
      </div>
      <div className=" mt-2">
        <span className="text-Rose-300">{product.name}</span>
        <h3 className="text-Rose-900">{product.category}</h3>
        <p className="text-orange-400">${product.price.toFixed(2)}</p>
      </div>
    </section>
  );
}
