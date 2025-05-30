import React, { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPassword = (): JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // TODO: Add API call to send reset password email
    console.log("Sending reset password email to:", email);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to OTP verification page on success
      navigate("/auth/otp-verification");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[402px] min-h-screen px-5 py-8">
        <button 
          className="flex items-center"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="w-[30px] h-[30px]" />
        </button>

        <div className="mt-10">
          <h1 className="font-['Inter'] font-medium text-black text-[32px]">
            Forgot Password
          </h1>
          
          <p className="mt-4 text-gray-600 font-['Inter'] text-base">
            Enter your email address and we'll send you a verification code to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`h-14 text-base ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="w-full mt-10 h-14 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send Code"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 font-['Inter'] text-sm">
              Remember your password? 
              <button 
                onClick={() => navigate("/auth/login")}
                className="ml-1 text-blue-600 font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

