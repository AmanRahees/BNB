import React from "react";
import Categories from "../_components/categories";
import { PropertyItem } from "../_components/properties";

function page() {
  return (
    <>
      <Categories />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(10)].map((i) => (
          <PropertyItem
            key={i}
            image="/demo-property.png"
            host="Aman"
            price={5299}
            location="Mananthavady, India"
            rating={4.8}
            available="12-20 Mar"
          />
        ))}
      </div>
    </>
  );
}

export default page;
