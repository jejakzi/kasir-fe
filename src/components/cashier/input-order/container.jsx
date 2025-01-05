import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ArchiveIcon from "@/components/icons/archive";
import { Separator } from "@/components/ui/separator";
import { useOrderMenu } from "@/context/order-provider";
import OrderItem from "@/components/cashier/input-order/item";
import PopUp from "@/components/cashier/input-order/pop-up";

const options = [
  {
    value: 1,
    label: "01",
  },
  {
    value: 2,
    label: "02",
  },
  {
    value: 3,
    label: "03",
  },
  {
    value: 4,
    label: "04",
  },
  {
    value: 5,
    label: "05",
  },
];

const nominal = [50000, 75000, 100000];

const OrderContainer = () => {
  const {
    order,
    setOrder,
    updateMenuItem,
    removeMenuItem,
    setPayment,
    loading,
    createOrder,
    orderSuccess,
    setOrderSuccess,
  } = useOrderMenu();
  const isDisabled =
    !order.name ||
    (!order.tableNumber && order.type === "dine-in") ||
    order.menuList.length === 0 ||
    order.paidAmount === 0 ||
    order.paidAmount < order.total ||
    loading;

  const handleCustomerNameChange = (e) => {
    setOrder({ ...order, name: e.target.value });
  };

  const handleTableNumberChange = (e) => {
    setOrder({ ...order, tableNumber: e });
  };

  return (
    <div className="flex flex-col w-2/6 gap-4 p-4 rounded-xl bg-neutral-100">
      {orderSuccess && (
        <PopUp data={orderSuccess} onClose={() => setOrderSuccess(null)} />
      )}
      {/* Header Order Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-roboto-medium">List Order</h3>
          <p className="-mt-1 text-[10px] font-roboto-light text-neutral-500">
            No Order{" "}
            <span className="text-neutral-800 font-roboto">
              {order.order_number}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center border rounded-xl size-9">
          <ArchiveIcon size={16} />
        </div>
      </div>

      {/* Tab Order Section */}
      <div className="flex w-full gap-2">
        <Button
          onClick={() => setOrder({ ...order, type: "dine-in" })}
          variant={order.type === "dine-in" ? "default" : "outline"}
          className="w-full rounded-lg"
        >
          Dine in
        </Button>
        <Button
          onClick={() => setOrder({ ...order, type: "take-away" })}
          variant={order.type === "take-away" ? "default" : "outline"}
          className="w-full rounded-lg"
        >
          Take Away
        </Button>
      </div>

      {/* View Order Section */}
      {order.type === "dine-in" ? (
        <div className="w-full">
          <div className="flex items-center gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Customer Name</Label>
              <Input
                value={order.name}
                onChange={handleCustomerNameChange}
                id="name"
                placeholder="Customer Name"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label>No. Table</Label>
              <Select onValueChange={handleTableNumberChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select No. Table" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>No. Table</SelectLabel>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator className="my-4" />
        </div>
      ) : (
        <div className="w-full">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Customer Name</Label>
            <Input
              value={order.name}
              onChange={handleCustomerNameChange}
              id="name"
              placeholder="Customer Name"
            />
          </div>
          <Separator className="my-4" />
        </div>
      )}
      {/* Order List */}
      <div className="flex flex-col w-full h-full gap-4 -mt-4 overflow-y-scroll">
        {order.menuList.map((item, index) => (
          <OrderItem
            key={index}
            item={item}
            onChange={updateMenuItem}
            onRemove={removeMenuItem}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        {/* Slip Order Section */}
        <div className="relative flex flex-col w-full gap-2 p-4 border-b-2 border-dashed bg-neutral-200 border-neutral-500">
          <div className="flex items-center justify-between">
            <p className="text-sm capitalize font-roboto-light text-neutral-400">
              sub total
            </p>
            <p className="text-sm font-roboto text-neutral-600">
              Rp. {order.subtotal.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm capitalize font-roboto-light text-neutral-400">
              tax
            </p>
            <p className="text-sm font-roboto text-neutral-600">
              Rp. {order.tax.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="absolute rounded-full top-[68px] -left-2.5 size-6 bg-neutral-100"></div>
          <div className="absolute rounded-full top-[68px] -right-2.5 size-6 bg-neutral-100"></div>
        </div>
        <div className="flex flex-col w-full gap-2 p-4 -mt-4 bg-neutral-200">
          <div className="flex items-center justify-between">
            <p className="text-xl capitalize font-roboto text-neutral-900">
              total
            </p>
            <p className="text-2xl font-roboto-medium text-neutral-900">
              Rp. {order.total.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 bg-neutral-100">
          <p className="text-xs font-roboto">Select Nominal</p>
          <div className="grid grid-cols-3 gap-2">
            {nominal.map((v, i) => (
              <Button
                onClick={() => setPayment(v)}
                key={i}
                variant="outline"
                className={`${
                  v === order.paidAmount &&
                  "text-neutral-100 font-roboto-medium bg-primary-500 hover:bg-primary-400 hover:text-neutral-100"
                } text-xs`}
              >
                Rp {v.toLocaleString("id-ID")}
              </Button>
            ))}
          </div>
          <Input
            onChange={(e) => setPayment(e.target.value)}
            type="number"
            className="mt-2 text-[10px] border-none placeholder:text-[10px] placeholder:text-center h-11"
            placeholder="Enter Nominal here..."
          />
          {order.paidAmount < order.total && order.paidAmount > 0 && (
            <p className="text-[10px] text-red-500 font-roboto-light-italic">
              *Nominal not enough
            </p>
          )}
        </div>
        <Button onClick={createOrder} disabled={isDisabled}>
          {loading ? "Loading..." : "Pay"}
        </Button>
      </div>
    </div>
  );
};

export default OrderContainer;
