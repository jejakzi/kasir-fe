import React from "react";
import { MenuProvider } from "@/context/menu-provider";
import { OrderProvider } from "@/context/order-provider";
import { AuthProvider } from "@/context/auth-provider";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <OrderProvider>{children}</OrderProvider>
      </MenuProvider>
    </AuthProvider>
  );
};

export default AppProvider;
