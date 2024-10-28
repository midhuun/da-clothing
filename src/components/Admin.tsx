import  { useState } from "react";
import categories from "../categories";
import { Category } from "../type";
const Admin = () => {
  const [subCategories, setSubCategories] = useState(["Pant & Short"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [showNewSubCategoryInput, setShowNewSubCategoryInput] = useState(false);

  const handleAddProduct = () => {
    // Implement add product logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Product</h2>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">Category</label>
          {!showNewCategoryInput ? (
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                if (e.target.value === "new") setShowNewCategoryInput(true);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a category</option>
              {categories.map((cat:Category, index) => (
                <option key={index} value={cat.id}>{cat.name}</option>
              ))}
              <option value="new">Add new category</option>
            </select>
          ) : (
            <input
              type="text"
              placeholder="Enter new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onBlur={() => {
                setCategories([...categories, newCategory]);
                setSelectedCategory(newCategory);
                setShowNewCategoryInput(false);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
        </div>

        {/* Subcategory Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="subcategory">Subcategory</label>
          {!showNewSubCategoryInput ? (
            <select
              value={selectedSubCategory}
              onChange={(e) => {
                setSelectedSubCategory(e.target.value);
                if (e.target.value === "new") setShowNewSubCategoryInput(true);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a subcategory</option>
              {subCategories.map((sub, index) => (
                <option key={index} value={sub}>{sub}</option>
              ))}
              <option value="new">Add new subcategory</option>
            </select>
          ) : (
            <input
              type="text"
              placeholder="Enter new subcategory"
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              onBlur={() => {
                setSubCategories([...subCategories, newSubCategory]);
                setSelectedSubCategory(newSubCategory);
                setShowNewSubCategoryInput(false);
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
        </div>

        {/* Other Inputs for Product Details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" placeholder="Hemp Fabric Natural Dye Shorts" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        {/* Add Product Button */}
        <div className="flex justify-between mt-6">
          <button onClick={handleAddProduct} className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-400">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
