import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuthentication } from "@/context/auth-provider";
import { toast } from "react-toastify";
import { EyeSlashIcon, EyeIcon } from "@/components/icons";

const ResetForm = () => {
  const navigate = useNavigate();
  const { loading, dataReset, setDataReset, checkEmail, resetPassword } =
    useAuthentication();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOldPasswordChange = (event) => {
    setDataReset({
      ...dataReset,
      oldPassword: event.target.value,
    });
  };

  const handleNewPasswordChange = (event) => {
    setDataReset({
      ...dataReset,
      newPassword: event.target.value,
    });
  };

  const handleSubmitEmail = async () => {
    try {
      await checkEmail(email);

      setStep(2);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const handleSubmitReset = async () => {
    try {
      await resetPassword();

      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="flex flex-col w-full gap-4 my-8">
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="h-11"
                />
              </div>
            </div>

            <Button
              disabled={loading || !email}
              onClick={handleSubmitEmail}
              className="w-full h-11"
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col w-full gap-4 my-8">
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="old-password">Old Password</Label>
                <div className="relative">
                  <Input
                    onChange={handleOldPasswordChange}
                    type={showPassword ? "text" : "password"}
                    id="old-password"
                    placeholder="Old Password"
                    className="pr-12 h-11"
                  />
                  {showPassword ? (
                    <EyeIcon
                      onClick={handleClickShowPassword}
                      size={20}
                      className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={handleClickShowPassword}
                      size={20}
                      className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    />
                  )}
                </div>
              </div>
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="new-password">New Password</Label>
                <div className="relative">
                  <Input
                    onChange={handleNewPasswordChange}
                    type={showPassword ? "text" : "password"}
                    id="new-password"
                    placeholder="New Password"
                    className="pr-12 h-11"
                  />
                  {showPassword ? (
                    <EyeIcon
                      onClick={handleClickShowPassword}
                      size={20}
                      className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    />
                  ) : (
                    <EyeSlashIcon
                      onClick={handleClickShowPassword}
                      size={20}
                      className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-3"
                    />
                  )}
                </div>
              </div>
            </div>

            <Button
              disabled={loading || !dataReset}
              onClick={handleSubmitReset}
              className="w-full h-11"
            >
              {loading ? "Loading..." : "Reset Password"}
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl px-24 py-12 rounded-2xl bg-neutral-100">
      <Link to="/">
        <Logo />
      </Link>
      <h1 className="mt-6 text-4xl font-roboto-medium">Reset Password</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Please enter your registered email here!
      </p>
      {renderForm()}
    </div>
  );
};

export default ResetForm;
