import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeSlashIcon, EyeIcon } from "@/components/icons";
import { useAuthentication } from "@/context/auth-provider";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loading, login, user } = useAuthentication();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !username || !password || loading;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    login(username, password);
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
      <p className="mt-2 text-sm text-neutral-500">
        Please enter your username and password here!
      </p>

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
        </div>
        <Link to="/reset-password">
          <p className="text-xs text-right text-neutral-500">
            Forgot Password?
          </p>
        </Link>
      </div>

      <Button
        onClick={handleLogin}
        disabled={isDisabled}
        className="w-full h-11"
      >
        {loading ? "Loading..." : "Login"}
      </Button>
      <p className="mt-2 text-xs text-neutral-500">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary-500 font-roboto-medium">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
