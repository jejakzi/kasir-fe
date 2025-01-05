import React from "react";
import { MaximizeIcon } from "@/components/icons";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ItemMenu = ({ item, onClick, order }) => {
  const isActive = order.menuList.some((menu) => menu.id === item.id);
  const handleClickItem = () => {
    if (!item) return;

    onClick(item);
  };

  return (
    <div
      key={item.id}
      className={`relative flex flex-col w-full h-full p-2 rounded-xl bg-neutral-100 ${
        isActive ? "border-2 border-primary-500" : ""
      }`}
    >
      <div onClick={handleClickItem} className="cursor-pointer">
        <img
          src={item.image_url}
          alt={item.name}
          width={190}
          height={120}
          className="object-cover w-full h-[120px] rounded-lg"
        />
        <div className="bg-primary-500 rounded-full px-4 py-0.5 text-neutral-100 text-xs capitalize w-fit absolute top-4 right-4">
          {item.category_name}
        </div>
        <h5 className="mt-2 text-black font-roboto-medium">{item.name}</h5>
        <p className="text-[10px] line-clamp-2 font-roboto-light text-neutral-500 mb-2">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <p className="text-sm text-primary-500 font-roboto-medium">
          Rp {item.price.toLocaleString("id-ID")}
          <span className="font-roboto-light text-neutral-500 text-[10px]">
            /portion
          </span>
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <MaximizeIcon size={20} className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">Detail Menu</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col w-full">
              <img
                src={item.image_url}
                alt={item.name}
                width={460}
                height={240}
                className="object-cover w-full h-[240px] rounded-lg"
              />
              <div className="bg-primary-500 mt-2 rounded-full px-4 py-0.5 text-neutral-100 text-xs capitalize w-fit">
                {item.category_name}
              </div>
              <h5 className="text-2xl text-black font-roboto-medium">
                {item.name}
              </h5>
              <p className="mb-2 text-sm line-clamp-2 font-roboto-light text-neutral-500">
                {item.description}
              </p>
              <p className="text-xl text-primary-500 font-roboto-medium">
                Rp {item.price.toLocaleString("id-ID")}
                <span className="text-sm font-roboto-light text-neutral-500">
                  /portion
                </span>
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ItemMenu;
