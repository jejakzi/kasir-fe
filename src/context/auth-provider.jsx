import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { HOSTNAME_URL } from "@/lib/constant";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [dataReset, setDataReset] = useState(null);

  const checkEmail = async (email) => {
    setLoading(true);

    try {
      await axios.post(`${HOSTNAME_URL}/auth/check?email=${email}`);

      setDataReset({
        email: email,
      });

      toast.success("Email is available!");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setLoading(true);

    try {
      await axios.post(`${HOSTNAME_URL}/auth/reset`, {
        old_password: dataReset.oldPassword,
        email: dataReset.email,
        new_password: dataReset.newPassword,
      });

      toast.success("Reset password successfully, please login!");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
      setDataReset(null);
    }
  };

  const login = async (username, password) => {
    setLoading(true);

    try {
      const response = await axios.post(`${HOSTNAME_URL}/auth/login`, {
        username: username,
        password: password,
      });

      setUser(response.data.data);
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (username, email, password, confirmPassword) => {
    setLoading(true);

    try {
      await axios.post(`${HOSTNAME_URL}/auth/registration`, {
        username: username,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      });

      toast.success("Registered successfully, please login!");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        loading,
        dataReset,
        checkEmail,
        resetPassword,
        setDataReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthentication = () => {
  const {
    user,
    setUser,
    login,
    register,
    logout,
    loading,
    dataReset,
    checkEmail,
    resetPassword,
    setDataReset,
  } = useAuth();

  return {
    user,
    setUser,
    login,
    register,
    logout,
    loading,
    dataReset,
    checkEmail,
    resetPassword,
    setDataReset,
  };
};
