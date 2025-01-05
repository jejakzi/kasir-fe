import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const filters = ["All", "Food", "Beverage", "Dessert"];

const FilterSection = ({ filterByCategory }) => {
  const [filter, setFilter] = useState("All");

  const handleClickFilter = (item) => {
    setFilter(item);

    filterByCategory(item);
  };

  return (
    <div className="grid w-full grid-cols-4 gap-2">
      {filters.map((item, index) => (
        <Button
          onClick={() => handleClickFilter(item)}
          key={index}
          className="h-11"
          variant={filter === item ? "default" : "outline"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterSection;
