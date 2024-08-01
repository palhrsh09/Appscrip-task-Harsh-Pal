"use client";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import FilterComponent from "../../components/FilterComponent";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filter, setFilter] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");
  const [error, setError] = useState(null); // State to store error messages

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Error fetching products: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message); // Set error message in case of failure
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error.message); // Set error message in case of failure
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const sortProducts = (products) => {
    switch (sortOption) {
      case "priceHighToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "priceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "rating":
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const handleSortChange = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <main className="">
        <div className="py-[10px] flex justify-between items-center border-y font-[400] text-[16px] leading-[40px]">
          {/* Mobile view */}
          <div className="flex justify-between items-center w-full md:hidden">
            <span className="cursor-pointer uppercase" onClick={() => setFilter(!filter)}>Filter</span>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center uppercase"
              >
                {sortOption}
                <MdOutlineKeyboardArrowDown className="ml-2" size={24} />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <li>
                    <button
                      onClick={() => handleSortChange("recommended")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Recommended
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("priceHighToLow")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("priceLowToHigh")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("rating")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Highest Rated
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:flex md:justify-between md:items-center md:w-full">
            <div className="flex gap-[30px]">
              <span>{filteredProducts.length} Items</span>
              <div className="underline cursor-pointer text-[#888792]" onClick={() => setFilter(!filter)}>
                <span className="flex items-center ">
                  {filter ? <RiArrowLeftSLine /> : <MdOutlineKeyboardArrowRight />}
                  {filter ? "Hide Filters" : "Show Filters"}
                </span>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center uppercase bg-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOption}
                <MdOutlineKeyboardArrowDown className="ml-2" size={24} />
              </button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <li>
                    <button
                      onClick={() => handleSortChange("recommended")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Recommended
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("priceHighToLow")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("priceLowToHigh")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSortChange("rating")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase"
                    >
                      Highest Rated
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Display error message if there's an error */}
        {error && <div className="text-red-500 text-center p-4">{error}</div>}

        <div className="flex w-full mt-2 gap-[12px]">
          {!filter && (
            <div className="hidden md:flex w-[300px]">
              <FilterComponent
                categories={categories}
                onCategoryChange={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>
          )}

          <div className="product-container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
