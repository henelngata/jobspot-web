"use client";

import { useState } from "react";
import { Eye, EyeOff} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface HeaderProps{
  heading: string
  subheading: string
}
const Header:React.FC<HeaderProps> = ({heading, subheading}) => {
  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold text-center mb-2 text-dark-blue">{heading}</h1>
      <p className="text-xs text-deep-purple  text-center">{subheading}</p>
    </section>
  )
}
export default function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="w-full max-w-md mx-auto space-y-8 border-2">
      <form className="space-y-6">
        {isLogin ? (
          <Header
            heading="Welcome Back"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        ) : (
          <Header
            heading="Create an Account"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        )}

        {!isLogin && (
          <div className="space-y-2">
            <Label
              className="block text-xs font-bold text-dark-blue mb-1 capitalize"
              htmlFor="fullName"
            >
              Full Name
            </Label>
            <Input
              className="p-4 relative w-full rounded-sm bg-white   text-xs text-deep-purple"
              id="fullName"
              type="text"
              required
            />
          </div>
        )}

        <div className="space-y-2">
          <Label
            className="block text-xs font-bold text-dark-blue mb-1 capitalize"
            htmlFor="email"
          >
            Email
          </Label>
          <Input
            className="p-4 relative w-full rounded-sm bg-white   text-xs text-deep-purple"
            id="email"
            type="email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            className="block text-xs font-bold text-dark-blue mb-1 capitalize"
            htmlFor="password"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              className="p-4 relative w-full rounded-sm bg-white   text-xs text-deep-purple"
              id="password"
              type={showPassword ? "text" : "password"}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button variant="link" className="p-0">
            Forgot password?
          </Button>
        </div>

        <Button type="submit" className="w-full">
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        <Button variant="outline" className="w-full">
          Sign in with Google
        </Button>

        <div className="text-center">
          <Button variant="link" onClick={toggleForm}>
            {isLogin
              ? "Need an account? Sign Up"
              : "Already have an account? Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
