import React from "react";
import RegisterForm from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="w-full h-dvh bg-[url('/images/auth-bg.png')] bg-cover bg-top bg-no-repeat">
      <div className="flex items-center w-full h-full px-32">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
