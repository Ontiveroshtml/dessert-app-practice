import { useEffect } from "react";

export function CartButton({
  product,
  count,
  setCount,
  onAdd,
  onRemove,
  cart,
}) {
  const handleSum = () => {
    setCount((prev) => prev + 1);
    onAdd(product);
  };
  const handleRest = () => {
    setCount((prev) => Math.max(prev - 1, 0));
    onRemove(product);
  };

  useEffect(() => {
    const exists = cart.find((item) => item.name === product.name);
    if (!exists) {
      setCount(0);
    }
  }, [cart, product.name, setCount]);

  return (
    <>
      {count === 0 ? (
        <button
          onClick={handleSum}
          className="flex absolute -bottom-5 bg-Rose-50 rounded-full px-8 py-2.5 gap-2 text-md border-2 border-Rose-500 cursor-pointer hover:bg-Rose-100"
        >
          <img src="./icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      ) : (
        <div className="flex absolute justify-between gap-8 -bottom-5 bg-Red rounded-full px-8 py-2.5 text-md border">
          <button
            onClick={handleRest}
            className="border border-white rounded-full p-1 hover:bg-red-300 cursor-pointer"
          >
            <img src="./icon-decrement-quantity.svg" alt="" />
          </button>
          <p className="text-white">{count}</p>
          <button
            onClick={handleSum}
            className="border border-white rounded-full p-1 hover:bg-red-300 cursor-pointer"
          >
            <img src="./icon-increment-quantity.svg" alt="" />
          </button>
        </div>
      )}
    </>
  );
}
