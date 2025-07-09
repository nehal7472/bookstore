import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  setRowsPerPage,
  setCurrentPage,
  toggleModal,
  startEditProduct,
  deleteProduct,
  setCategoryFilter,
} from "../../store/books/productSlice";
import { FiFilter } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import AddProductModal from "../../components/AddProductModal";

const Products = () => {
  const dispatch = useDispatch();
  const { products, search, rowsPerPage, currentPage, categoryFilter } =
    useSelector((state) => state.product);

  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const term = search.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      ((term === "active" || term === "inactive") &&
        product.status.toLowerCase() === term) ||
      product.category.toLowerCase().includes(term) ||
      product.price.toString().includes(term);

    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNext = () => {
    if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1));
  };

  const handleRowsChange = (e) => {
    dispatch(setRowsPerPage(Number(e.target.value)));
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-2 relative">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="p-2 rounded-md border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
            title="Filter by category"
          >
            <FiFilter className="w-6 h-6" />
          </button>

          {showFilterDropdown && (
            <div className="absolute z-10 top-12 left-0 bg-white border border-gray-300 shadow rounded w-48">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    dispatch(setCategoryFilter(cat));
                    setShowFilterDropdown(false);
                  }}
                  className={`block px-4 py-2 text-left w-full hover:bg-blue-100 ${
                    categoryFilter === cat ? "bg-blue-100 font-semibold" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <input
            type="text"
            placeholder="Search by name, description or status..."
            className="border border-gray-300 rounded-md px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        <button
          onClick={() => dispatch(toggleModal(true))}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md shadow"
        >
          + Add item
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-700">#</th>
              <th className="px-4 py-3 font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 font-medium text-gray-700">
                Description
              </th>
              <th className="px-4 py-3 font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 font-medium text-gray-700">Category</th>
              <th className="px-4 py-3 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {(currentPage - 1) * rowsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-3 font-semibold">{product.name}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {product.description}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      title="Edit"
                      onClick={() => dispatch(startEditProduct(product))}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <AiFillEdit className="text-xl" />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => dispatch(deleteProduct(product.id))}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 px-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={handleRowsChange}
            className="border border-gray-300 rounded px-2 py-1 bg-white"
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            &lt;
          </button>
          <span>
            {currentPage}/{totalPages || 1}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-2 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>

      <AddProductModal />
    </div>
  );
};

export default Products;
