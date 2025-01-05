import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  PiArrowCircleRightLight,
  PiMagnifyingGlass,
  PiUser,
} from "react-icons/pi";
import { ArchiveIcon, LogoutIcon } from "@/components/icons";
import { useFetchAndFilterMenus } from "@/context/menu-provider";
import { useAuthentication } from "@/context/auth-provider";
import { useOrderMenu } from "@/context/order-provider";

const Navbar = () => {
  const { searchByKeyword } = useFetchAndFilterMenus();
  const { user, logout } = useAuthentication();
  const { listOrder } = useOrderMenu();

  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedOrderType, setSelectedOrderType] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(listOrder);

  const handleSearch = () => {
    const filtered = listOrder.filter((order) => {
      const matchesKeyword = order.customer_name
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
      const matchesOrderType =
        selectedOrderType === null ||
        order.order_type_name === selectedOrderType ||
        selectedOrderType === "All";

      console.log(matchesOrderType, matchesKeyword);

      return matchesKeyword && matchesOrderType;
    });

    setFilteredOrders(filtered);
  };

  const handleReset = () => {
    setSearchKeyword("");
    setSelectedOrderType(null);
    setFilteredOrders(listOrder);
  };

  return (
    <div className="flex items-center justify-between w-full h-20 px-8 py-4 bg-neutral-100">
      <div className="flex items-center px-2 ml-8 border rounded-lg w-96">
        <PiMagnifyingGlass size={24} className="text-neutral-400" />
        <Input
          onChange={(e) => searchByKeyword(e.target.value)}
          placeholder="Enter the keyword here..."
          className="border-none"
        />
      </div>
      <div className="flex items-center">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center cursor-pointer">
              <ArchiveIcon size={18} />
              <span className="ml-2 text-sm tracking-wide text-neutral-600">
                Order Archive
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] lg:max-w-3xl bg-neutral-200 max-h-[786px] overflow-y-hidden">
            <DialogHeader>
              <DialogTitle>Order Archive</DialogTitle>
            </DialogHeader>
            <div className="flex items-center gap-4">
              <div className="flex items-center w-full px-2 border rounded-lg h-11 bg-neutral-100">
                <PiMagnifyingGlass size={24} className="text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Enter the keyword here..."
                  className="w-full border-none"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <Select onValueChange={(value) => setSelectedOrderType(value)}>
                <SelectTrigger className="w-full max-w-[200px] rounded-lg shadow-none h-11 bg-neutral-100">
                  <SelectValue placeholder="Select Order Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Order Type</SelectLabel>
                    <SelectItem value={"All"}>All</SelectItem>
                    <SelectItem value={"Dine in"}>Dine in</SelectItem>
                    <SelectItem value={"Take away"}>Take away</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="rounded-lg h-11" onClick={handleSearch}>
                Search
              </Button>
              {(searchKeyword || selectedOrderType) && (
                <Button
                  variant="destructive"
                  className="rounded-lg h-11"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              )}
            </div>
            <div className="max-h-[676px] overflow-y-scroll flex flex-col gap-4 h-full pb-8">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((item) => (
                  <div
                    key={item.id}
                    className="w-full p-2 rounded-lg bg-neutral-100"
                  >
                    <div className="flex items-center w-full gap-2">
                      <p className="text-sm text-neutral-500">
                        No Order {item.order_number}
                      </p>
                      <p className="px-2 text-sm border-x">
                        {item.order_type_name}
                      </p>
                      <p className="pr-2 text-sm border-r">
                        {item.customer_name}
                      </p>
                      {item.order_type_name !== "Take away" && (
                        <p className="text-sm">No. {item.table_no}</p>
                      )}
                      <p className="ml-auto text-xs text-neutral-500">
                        {item.order_date}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Rp {item.total.toLocaleString("id-ID")}</p>
                      <PiArrowCircleRightLight
                        size={30}
                        className="text-primary-500"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-center text-neutral-500">
                  No orders found. Please try a different keyword or filter.
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <div className="flex items-center gap-3 ml-16 mr-8">
          <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-primary-500/75">
            <PiUser size={24} className="text-neutral-100" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-roboto-medium">{user?.username}</p>
            <p className="text-[10px] text-neutral-600 font-roboto-light tracking-wide capitalize">
              {user?.role}
            </p>
          </div>
        </div>
        <LogoutIcon onClick={logout} size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
