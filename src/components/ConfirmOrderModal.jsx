export function ConfirmOrderModal({ cart, handleModal }) {
  const total = cart.reduce((acc, cart) => acc + cart.price * cart.qty, 0);
  return (
    <div className="bg-white p-4 rounded-md w-120">
      <img src="./icon-order-confirmed.svg" alt="" />
      <h2 className="text-2xl font-bold">Order Confirmed</h2>
      <span className="text-xs font-md opacity-60">
        We hope you enjoy your food!
      </span>
      <ul className="flex flex-col gap-6 mt-4 bg-Rose-100">
        {cart.map((item) => (
          <div key={item.name} className="flex p-4 gap-4">
            <img
              src={item.image.desktop}
              alt={item.name}
              className="max-w-15 rounded-2xl"
            />

            <li className="flex flex-col">
              <div className="flex flex-row">
                <span className="text-Rose-900 font-bold">{item.name}</span>
              </div>

              <div className="flex flex-row justify-start">
                <div className="flex gap-3">
                  <span className="text-orange-600 font-bold">x{item.qty}</span>
                  <span className="text-Rose-400 ">
                    @ {item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </li>

            <div className="flex flex-1 justify-end items-center">
              <span className="text-Rose-500 font-bold ">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          </div>
        ))}

        <hr className="mt-3 opacity-10" />
      </ul>
      <div className="flex justify-between items-center bg-Rose-100 p-6">
        <span>Order Total</span>
        <span className="font-bold text-2xl">{total.toFixed(2)}</span>
      </div>
      <button onClick={handleModal} className="bg-Red w-full p-3 rounded-full text-Rose-50 font-medium mt-2 hover:bg-red-900 cursor-pointer">
        Start New Order
      </button>
    </div>
  );
}
