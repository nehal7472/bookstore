import { useDispatch, useSelector } from "react-redux";
import {
  toggleModal,
  addProduct,
  updateProduct,
  cancelEdit,
} from "../store/books/productSlice";
import { useEffect, useState } from "react";

const AddProductModal = () => {
  const dispatch = useDispatch();
  const { modalOpen, editMode, editingProduct } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Active",
    price: "",
    category: "",
  });

  useEffect(() => {
    if (editMode && editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData({
        name: "",
        description: "",
        status: "Active",
        price: "",
        category: "",
      });
    }
  }, [editMode, editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.description &&
      formData.status &&
      formData.price &&
      formData.category
    ) {
      if (editMode) {
        dispatch(updateProduct({ ...formData, price: parseFloat(formData.price) }));
      } else {
        dispatch(addProduct({ ...formData, price: parseFloat(formData.price) }));
      }
      dispatch(toggleModal(false));
    }
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
    dispatch(toggleModal(false));
  };

  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <h2 className="text-xl font-bold mb-4">
          {editMode ? "Edit Product" : "Add New Product"}
        </h2>

        <div className="space-y-3">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border rounded px-3 py-2" />
          <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border rounded px-3 py-2" />
          <select name="status" value={formData.status} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border rounded px-3 py-2" />
          <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {editMode ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
