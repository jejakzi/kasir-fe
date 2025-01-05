import React from "react";
import ItemMenu from "@/components/cashier/list-menu/item";

const ListSection = ({ data, handleClickItem, order }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col w-full h-full gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-roboto-medium">List Menu</h2>
          <p className="text-xs font-roboto-light text-neutral-500">
            Total <span className="text-black font-roboto">0 Menu</span>
          </p>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-roboto-light text-neutral-500">
              Menu not found
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-roboto-medium">List Menu</h2>
        <p className="text-xs font-roboto-light text-neutral-500">
          Total{" "}
          <span className="text-black font-roboto">{data.length} Menu</span>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 overflow-y-scroll max-h-[calc(100vh-210px)]">
        {data.map((item) => (
          <ItemMenu
            key={item.id}
            item={item}
            onClick={handleClickItem}
            order={order}
          />
        ))}
      </div>
    </div>
  );
};

export default ListSection;
