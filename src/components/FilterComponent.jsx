"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function FilterComponent({ categories, onCategoryChange, selectedCategory }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="flex flex-col">
      <span className="py-[20px] font-bold text-lg">Filter by Category</span>
      {categories.map((category) => (
        <div key={category} className="border-b py-[10px] flex flex-col">
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory(category)}
          >
            <span className="font-[700] text-[18px] leading-[21px] capitalize">
              {category}
            </span>
            {expandedCategory === category ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </div>
          {expandedCategory === category && (
            <div className="mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="form-radio"
                />
                <span>Select {category}</span>
              </label>
            </div>
          )}
        </div>
      ))}
      <div className="mt-4">
        <button
          onClick={() => onCategoryChange("")}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}