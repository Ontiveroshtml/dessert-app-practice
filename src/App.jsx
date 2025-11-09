import { useState } from "react";
import { CartList } from "./components/CartList";
import { ProductListings } from "./components/ProductListings";
import { ConfirmOrderModal } from "./components/ConfirmOrderModal";
import productsData from "./data.json";

//TODO: fix bug: reset count when the custumer start a new order
function App() {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleAddCart = (product) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.name === product.name);

      if (existe) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemoveCart = (product) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.name === product.name ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    });
  };

  const handleDeleteCart = (product) => {
    setCart((prev) => prev.filter((item) => item.name !== product.name));
  };

  const handleNewOrder = () => {
    setCart([]); 
    setModal(false);
  };

  return (
    <main className="flex relative bg-Rose-100">
      <div className="lg:flex p-16 max-w-full gap-8 mx-auto">
        <ProductListings
          onAdd={handleAddCart}
          onRemove={handleRemoveCart}
          productsData={productsData}
          onDelete={handleDeleteCart}
          cart={cart}
        />
        <CartList cart={cart} onDelete={handleDeleteCart} modal={handleModal} />
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-2">
          <ConfirmOrderModal
            cart={cart}
            handleNewOrder={handleNewOrder}
          />
        </div>
      )}
    </main>
  );
}

export default App;
