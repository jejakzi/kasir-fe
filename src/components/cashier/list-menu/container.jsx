import React from "react";
import FilterSection from "@/components/cashier/list-menu/filter";
import ListSection from "@/components/cashier/list-menu/list";
import { useFetchAndFilterMenus } from "@/context/menu-provider";
import { useOrderMenu } from "@/context/order-provider";

const MenuContainer = () => {
  const { filteredMenus, loading, error, filterByCategory, searchByKeyword } =
    useFetchAndFilterMenus();
  const { addMenuItem, order } = useOrderMenu();

  return (
    <div className="flex flex-col w-4/6 gap-4">
      <FilterSection filterByCategory={filterByCategory} />

      <ListSection
        data={filteredMenus}
        handleClickItem={addMenuItem}
        order={order}
      />
    </div>
  );
};

export default MenuContainer;
