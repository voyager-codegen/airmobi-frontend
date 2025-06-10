import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendEmail = () => {
    setIsResending(true);
    // Simulate API call to resend verification email
    setTimeout(() => {
      setIsResending(false);
      setResendSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setResendSuccess(false), 5000);
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

        {/* Email Verification header */}
        <h1 className="text-2xl font-semibold text-center mb-8">Verify Your Email</h1>

        {/* Email verification icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            We've sent a verification email to your email address. Please check your inbox and click the verification link to activate your account.
          </p>
          <p className="text-gray-600">
            If you don't see the email, check your spam folder or request a new verification email.
          </p>
        </div>

        {/* Resend button */}
        <div className="w-full">
          {resendSuccess && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-center">
              Verification email sent successfully!
            </div>
          )}
          <Button
            type="button"
            onClick={handleResendEmail}
            disabled={isResending}
            className="w-full bg-[#1A1D21] text-white rounded-full py-6"
          >
            {isResending ? "Sending..." : "Resend Verification Email"}
          </Button>
        </div>

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

