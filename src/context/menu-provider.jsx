import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { HOSTNAME_URL, PAGE, PAGE_SIZE } from "@/lib/constant";
import { useAuthentication } from "@/context/auth-provider";

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const { user } = useAuthentication();
  const [menus, setMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMenus = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${HOSTNAME_URL}/menu?page_no=${PAGE}&page_size=${PAGE_SIZE}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: user?.token,
          },
        }
      );

      setMenus(response.data.data);
      setFilteredMenus(response.data.data);
    } catch (err) {
      if (error.response.status === 401) {
        toast.error("Token expired, please login again!");

        localStorage.removeItem("user");
        setUser(null);
      } else {
        toast.error(error.response.data.error);
      }

      setError("Failed to fetch menus");
    } finally {
      setLoading(false);
    }
  };

  const filterByCategory = (category) => {
    if (!category || category === "All") {
      setFilteredMenus(menus);
    } else {
      const filtered = menus.filter((menu) => menu.category_name === category);
      setFilteredMenus(filtered);
    }
  };

  const searchByKeyword = (keyword) => {
    if (!keyword) {
      setFilteredMenus(menus);
    } else {
      const searched = menus.filter((menu) =>
        menu.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredMenus(searched);
    }
  };

  useEffect(() => {
    if (!user) return;

    fetchMenus();
  }, [user]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        filteredMenus,
        loading,
        error,
        filterByCategory,
        searchByKeyword,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useFetchAndFilterMenus = () => {
  const {
    menus,
    filteredMenus,
    loading,
    error,
    filterByCategory,
    searchByKeyword,
  } = useMenu();

  return {
    menus,
    filteredMenus,
    loading,
    error,
    filterByCategory,
    searchByKeyword,
  };
};
