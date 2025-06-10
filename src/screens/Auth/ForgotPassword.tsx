import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset password for:", email);
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmailSent(true);
      
      // For demo purposes, we'll redirect to reset-password after 2 seconds
      // In a real app, the user would click a link in their email
      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Container for centering content on larger screens */}
      <div className="w-full max-w-md mx-auto px-6 py-8 flex-1 flex flex-col">
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

        {emailSent ? (
          <>
            {/* Success message */}
            <div className="p-4 bg-green-50 rounded-md mb-6">
              <p className="text-green-700 text-center">
                Password reset link has been sent to your email address.
              </p>
            </div>
            
            <p className="text-center text-gray-600 mb-8">
              Please check your inbox and click the reset link to set a new password.
            </p>
            
            {/* For demo purposes only */}
            <p className="text-center text-sm text-gray-500 mb-4">
              (For demo purposes, you'll be redirected to the reset password page in a moment)
            </p>
          </>
        ) : (
          <>
            {/* Description */}
            <p className="text-center text-gray-600 mb-8">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
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
                disabled={isSubmitting}
                className="w-full bg-[#1A1D21] text-white rounded-full py-6"
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </>
        )}

        {/* Back to Sign In */}
        <div className="mt-8 text-center">
          <Link to="/signin" className="text-black hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

