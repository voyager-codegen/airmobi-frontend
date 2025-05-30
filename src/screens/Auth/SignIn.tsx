import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in with:", { email, password });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log("Sign in with Google");
  };

  const handleLineSignIn = () => {
    // Handle Line sign in
    console.log("Sign in with Line");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in
    console.log("Sign in with Facebook");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Container for centering content on larger screens */}
      <div className="w-full max-w-md mx-auto px-6 py-8 flex-1 flex flex-col">
        {/* Back button */}
        <div className="mb-4">
          <Link to="/" className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        </div>

        {/* Sign in header */}
        <h1 className="text-2xl font-semibold text-center mb-8">Sign in</h1>

        {/* Sign in form */}
        <form onSubmit={handleSignIn} className="space-y-6 w-full">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="rounded-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-full pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="text-sm">
            <Link to="/forgot-password" className="text-black hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1A1D21] text-white rounded-full py-6"
          >
            Sign in
          </Button>
        </form>

        {/* OR divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Social login buttons */}
        <div className="space-y-4 w-full">
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full rounded-full py-6 flex items-center justify-center gap-2 border border-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login In with Google</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleLineSignIn}
            className="w-full rounded-full py-6 flex items-center justify-center gap-2 border border-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg"
              alt="Line"
              className="w-5 h-5"
            />
            <span>Login In with Line</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleFacebookSignIn}
            className="w-full rounded-full py-6 flex items-center justify-center gap-2 border border-gray-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span>Login In with Facebook</span>
          </Button>
        </div>

        {/* Sign up link */}
        <div className="mt-8 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-black font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

