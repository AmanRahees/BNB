"use client";

import { useState } from "react";
import { categoryItems } from "./items";
import { BsCupHotFill } from "react-icons/bs";

const Categories = () => {
  const [active, setActive] = useState(categoryItems[0].title);
  const changeCategory = (title: string) => {
    setActive(title);
  };
  return (
    <div className="flex items-center space-x-12 py-2 mb-5">
      {categoryItems.map((category, idx) => (
        <button
          key={idx}
          className={`flex flex-col items-center space-y-2 pb-4 hover:opacity-100 transition-colors duration-300 ${
            active === category.title
              ? "opacity-100 border-b-2 border-black"
              : "opacity-60"
          }`}
          onClick={() => changeCategory(category.title)}
        >
          {category.icon}
          <p className="text-xs font-bold">{category.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Categories;
