import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/books/cartSlice";

const BooksCard = ({ book }) => {
  const dispatch = useDispatch();

  const { id, title, author, price, image, availability, category } = book;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, category }));
  };

  return (
    <div className="w-48 rounded-lg border shadow p-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-md w-full h-56 object-cover"
        />
        <span className="absolute top-1 left-1 bg-yellow-400 text-xs px-2 py-0.5 rounded-full font-semibold">
          {availability || "Available"}
        </span>
      </div>

      <div className="mt-3 text-center">
        <h2 className="font-semibold text-sm">{title}</h2>
        <p className="text-xs text-gray-600">{author}</p>
        <p className="text-sm line-through text-gray-400 mt-1">TK. {price}</p>
        <p className="text-xs text-gray-600">{category}</p>

        <button
          onClick={handleAddToCart}
          className="mt-2 w-full flex items-center justify-center gap-2 bg-white border border-yellow-400 text-yellow-600 px-3 py-1 rounded text-sm transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:text-white"
        >
          <FaCartArrowDown /> Add to Cart
        </button>
      </div>
      
    </div>
  );
};

export default BooksCard;
