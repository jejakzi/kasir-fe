import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon, PlusIcon, MinusIcon } from "@/components/icons";

const OrderItem = ({ item, onChange, onRemove }) => {
  const [quantity, setQuantity] = useState(item?.item || 1);
  const [note, setNote] = useState(item?.note || "");

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = () => {
    onChange(item?.id, { amount: quantity });
  };

  const handleRemove = () => {
    onRemove(item?.id);
  };

  useEffect(() => {
    handleQuantityChange();
  }, [quantity]);

  useEffect(() => {
    setQuantity(item?.amount || 1);
  }, [item]);

  return (
    <div className="flex items-center w-full gap-2">
      <img
        src={item?.image_url}
        alt={item?.name}
        width={100}
        height={100}
        className="object-cover object-center rounded-lg size-24"
      />
      <div className="w-full">
        <h5 className="mt-2 text-black font-roboto-medium">{item?.name}</h5>
        <p className="text-sm text-primary font-roboto">
          Rp {(item?.price * quantity)?.toLocaleString("id-ID")}
        </p>
        <div className="flex items-center gap-2 mt-4 ">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center justify-center p-1 rounded-lg cursor-pointer bg-neutral-300 w-fit">
                <EditIcon size={16} color="#3572EF" />
              </div>
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
                <div className="flex flex-col w-full gap-4 pt-2 mt-4 border-t-2 border-dashed">
                  <p className="text-sm font-roboto-medium">Catatan</p>
                  <textarea
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full p-2 text-sm border-none rounded-lg outline-none bg-neutral-200"
                    defaultValue={note}
                    rows={4}
                  ></textarea>
                  <DialogClose asChild>
                    <Button
                      disabled={!note}
                      onClick={() => onChange(item?.id, { note: note })}
                    >
                      Submit
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {item?.note && (
            <p className="text-[10px] text-neutral-500 truncate">
              {item?.note}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <div
          onClick={handleRemove}
          className="flex items-center justify-center p-1 border rounded-lg cursor-pointer border-neutral-300"
        >
          <TrashIcon size={18} color="#FF0000" />
        </div>
        <div className="flex items-center gap-2">
          <MinusIcon
            onClick={handleDecrement}
            size={24}
            color={quantity > 1 ? "#3572EF" : "#C4C4C4"}
            className={`${
              quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          />
          <p>{quantity}</p>
          <PlusIcon
            onClick={handleIncrement}
            size={24}
            color="#3572EF"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
