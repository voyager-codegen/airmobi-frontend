import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset password for:", email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white p-6">
      {/* Back button */}
      <div className="mb-4">
        <Link to="/signin" className="text-black">
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

      {/* Forgot Password header */}
      <h1 className="text-2xl font-semibold text-center mb-8">Forgot Password</h1>

      {/* Description */}
      <p className="text-center text-gray-600 mb-8">
        Enter your email address and we'll send you a link to reset your password.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <Button
          type="submit"
          className="w-full bg-[#1A1D21] text-white rounded-full py-6"
        >
          Send Reset Link
        </Button>
      </form>

      {/* Back to Sign In */}
      <div className="mt-8 text-center">
        <Link to="/signin" className="text-black hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

