import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeSlashIcon, EyeIcon } from "@/components/icons";
import { useAuthentication } from "@/context/auth-provider";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { loading, register, user } = useAuthentication();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isDisabled =
    !username || !email || !password || !confirmPassword || loading;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
      await register(username, email, password, confirmPassword);

      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl px-24 py-12 rounded-2xl bg-neutral-100">
      <Logo />
      <h1 className="mt-6 text-4xl font-roboto-medium">Welcome Back!</h1>
      <p className="mt-2 text-sm text-neutral-500">Create your account here!</p>

      <div className="flex flex-col w-full gap-4 my-8">
        <div className="grid w-full max-w-md items-center gap-1.5">
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={handleUsernameChange}
            id="username"
            placeholder="Username"
            className="h-11"
          />
        </div>
        <div className="grid w-full max-w-md items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleEmailChange}
            type="email"
            id="email"
            placeholder="Email"
            className="h-11"
          />
        </div>
        <div className="grid w-full max-w-md items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              onChange={handlePasswordChange}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
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
          {password.length < 8 && password.length > 0 && (
            <p className="text-xs text-red-500">
              Password must be at least 8 characters
            </p>
          )}
        </div>
        <div className="grid w-full max-w-md items-center gap-1.5">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <div className="relative">
            <Input
              onChange={handleConfirmPasswordChange}
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm Password"
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
          {password !== confirmPassword && confirmPassword.length > 0 && (
            <p className="text-xs text-red-500">Password does not match</p>
          )}
        </div>
      </div>

      <Button
        onClick={handleRegister}
        disabled={isDisabled}
        className="w-full h-11"
      >
        {loading ? "Loading..." : "Register"}
      </Button>
      <p className="mt-2 text-xs text-neutral-500">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-500 font-roboto-medium">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
