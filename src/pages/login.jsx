import React from "react";
import LoginForm from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <div className="w-full h-dvh bg-[url('/images/auth-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex items-center w-full h-full px-32">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
