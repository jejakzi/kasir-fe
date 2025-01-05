import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthentication } from "@/context/auth-provider";
import { HOSTNAME_URL } from "@/lib/constant";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

const initialStateOrder = {
  order_number: "",
  name: "",
  tableNumber: null,
  type: "dine-in",
  menuList: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  paidAmount: 0,
  change: 0,
};

export const OrderProvider = ({ children }) => {
  const [listOrder, setListOrder] = useState([]);
  const { user, setUser } = useAuthentication();
  const [order, setOrder] = useState(initialStateOrder);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const getOrderNumber = async () => {
    try {
      const response = await axios.get(`${HOSTNAME_URL}/order/order-no`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.token,
        },
      });

      setOrder((prev) => ({
        ...prev,
        order_number: response.data.data.order_number,
      }));
    } catch (error) {
      toast.error(error.response.data.error);

      if (error.response.status === 401) {
        toast.error("Token expired, please login again!");

        localStorage.removeItem("user");
        setUser(null);
      }
    }
  };

  const createOrder = async () => {
    setLoading(true);

    try {
      const payload = {
        order_number: order.order_number,
        customer_name: order.name,
        no_table_id: order.tableNumber || 1,
        order_type_id: order.type === "dine-in" ? 1 : 2,
        order_detail: order.menuList.map((item) => ({
          menu_id: item.id,
          amount: item.amount,
          note: item.note,
          price: item.price,
        })),
        sub_total: order.subtotal,
        tax: order.tax,
        total: order.total,
        paid: order.paidAmount,
      };

      const response = await axios.post(`${HOSTNAME_URL}/order`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.token,
        },
      });

      setOrderSuccess(response.data.data);

      getOrderList();
    } catch (error) {
      toast.error(error.response.data.error);

      if (error.response.status === 401) {
        toast.error("Token expired, please login again!");

        localStorage.removeItem("user");
        setUser(null);
      }
    } finally {
      setLoading(false);
      setOrder(initialStateOrder);
      getOrderNumber();
    }
  };

  const getOrderList = async () => {
    try {
      const response = await axios.get(`${HOSTNAME_URL}/order`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: user?.token,
        },
      });

      setListOrder(response.data.data);
    } catch (error) {
      toast.error(error.response.data.error);

      if (error.response.status === 401) {
        toast.error("Token expired, please login again!");

        localStorage.removeItem("user");
        setUser(null);
      }
    }
  };

  const addMenuItem = (menuItem) => {
    if (!menuItem) return;

    setOrder((prev) => {
      const existingItem = prev.menuList.find(
        (item) => item.id === menuItem.id
      );
      const updatedMenuList = existingItem
        ? prev.menuList.map((item) =>
            item.id === menuItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          )
        : [...prev.menuList, { ...menuItem, amount: 1, note: "" }];

      const subtotal = updatedMenuList.reduce(
        (sum, item) => sum + item.amount * item.price,
        0
      );
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { ...prev, menuList: updatedMenuList, subtotal, tax, total };
    });
  };

  const updateMenuItem = (id, updates) => {
    setOrder((prev) => {
      const updatedMenuList = prev.menuList.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      );

      const subtotal = updatedMenuList.reduce(
        (sum, item) => sum + item.amount * item.price,
        0
      );
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { ...prev, menuList: updatedMenuList, subtotal, tax, total };
    });
  };

  const removeMenuItem = (id) => {
    setOrder((prev) => {
      const updatedMenuList = prev.menuList.filter((item) => item.id !== id);

      const subtotal = updatedMenuList.reduce(
        (sum, item) => sum + item.amount * item.price,
        0
      );
      const tax = subtotal * 0.1;
      const total = subtotal + tax;

      return { ...prev, menuList: updatedMenuList, subtotal, tax, total };
    });
  };

  const setPayment = (paidAmount) => {
    setOrder((prev) => ({
      ...prev,
      paidAmount,
      change: paidAmount - prev.total,
    }));
  };

  useEffect(() => {
    if (!user) return;

    getOrderNumber();
    getOrderList();
  }, [user]);

  return (
    <OrderContext.Provider
      value={{
        order,
        addMenuItem,
        updateMenuItem,
        setPayment,
        removeMenuItem,
        setOrder,
        createOrder,
        loading,
        orderSuccess,
        setOrderSuccess,
        listOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderMenu = () => {
  const {
    order,
    setOrder,
    addMenuItem,
    updateMenuItem,
    removeMenuItem,
    setPayment,
    createOrder,
    loading,
    orderSuccess,
    setOrderSuccess,
    listOrder,
  } = useOrder();

  return {
    order,
    setOrder,
    addMenuItem,
    updateMenuItem,
    removeMenuItem,
    setPayment,
    createOrder,
    loading,
    orderSuccess,
    setOrderSuccess,
    listOrder,
  };
};
