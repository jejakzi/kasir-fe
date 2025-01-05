import React from "react";
import ResetForm from "@/components/auth/reset-form";

const ResetPasswordPage = () => {
  return (
    <div className="w-full h-dvh bg-[url('/images/auth-bg.png')] bg-cover bg-top bg-no-repeat">
      <div className="flex items-center w-full h-full px-32">
        <ResetForm />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
