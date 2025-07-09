import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../store/books/cartSlice";
import { useState } from "react";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CartModal = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed flex items-center gap-2 bottom-6 right-6 bg-yellow-600 hover:bg-yellow-800 text-white rounded-full p-4 shadow-lg z-50 animate-bounce transition duration-300 ease-in-out"
      >
        <FaCartPlus /> {cartItems.length}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              <IoClose />
            </button>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="divide-y max-h-[300px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="py-2 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-sm">
                          ৳{item.price} × {item.quantity} ={" "}
                          <strong>৳{item.price * item.quantity}</strong>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 ml-2"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-right mt-4">
                  <h3 className="text-lg font-bold">Total: ৳{total}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
