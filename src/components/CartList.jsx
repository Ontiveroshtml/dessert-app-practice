
export function CartList({ cart, onDelete, modal }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);


  return (
    <div className="flex flex-col justify-between">
      {cart.length === 0 ? (
        <>
          <aside className="flex flex-col justify-between bg-Rose-50 md:w-100 sm:w-20 px-6 py-6 rounded-lg bold md:mx-auto">
            <h2 className="text-Red font-bold text-2xl">
              Your Cart ({cart.length})
            </h2>
            <img
              src="/illustration-empty-cart.svg"
              alt="empty cart"
              className="flex max-w-30 mx-auto"
            />
            <span className="text-Rose-500">
              Your added items will appear here
            </span>
          </aside>
        </>
      ) : (
        <aside className="flex flex-col justify-between bg-Rose-50 md:w-100 px-6 py-6 rounded-lg bold  md:mx-auto">
          <h2 className="text-Red font-bold text-2xl">
            Your Cart ({cart.length})
          </h2>
          <ul className="flex flex-col gap-6 mt-6">
            {cart.map((item) => (
              <>
                <li key={item.name} className="flex flex-col justify-between">
                  <span className="text-Rose-900 font-bold">{item.name}</span>
                  <div className="flex flex-row justify-between">
                    <div className="flex gap-4">
                      <span className="text-orange-600 font-bold">
                        x{item.qty}
                      </span>
                      <span className="text-Rose-400 ">
                        @ {item.price.toFixed(2)}
                      </span>
                      <span className="text-Rose-500 font-bold">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => onDelete(item)}
                      className="border-2 rounded-full p-1 border-Rose-300 hover:border-Rose-400 cursor-pointer "
                    >
                      <img src="./icon-remove-item.svg" alt="" />
                    </button>
                  </div>
                  <hr className="mt-3 opacity-10" />
                </li>
              </>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <span className="text-md">order Total</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-center bg-Rose-100 p-3 mt-4 rounded-md gap-1">
            <img src="./icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button
            className="bg-Red text-Rose-100 p-4 rounded-full mt-4 cursor-pointer"
            onClick={modal}
          >
            Confirm Order
          </button>

        </aside>
      )}
    </div>
  );
}
