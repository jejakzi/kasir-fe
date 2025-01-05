import React from "react";
import Layout from "@/components/layout";
import MenuContainer from "@/components/cashier/list-menu/container";
import OrderContainer from "@/components/cashier/input-order/container";

const CashierPage = () => {
  return (
    <Layout>
      <div className="relative flex w-full h-full gap-4 p-4 overflow-hidden font-roboto">
        <MenuContainer />
        <OrderContainer />
      </div>
    </Layout>
  );
};

export default CashierPage;
