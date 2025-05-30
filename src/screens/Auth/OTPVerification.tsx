import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  // Countdown timer for resend button
  useEffect(() => {
    if (resendCountdown <= 0) return;
    
    const timer = setTimeout(() => {
      setResendCountdown(resendCountdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Clear any previous errors
    if (error) setError("");
    
    // Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    
    // Check if pasted content is a valid OTP (numbers only)
    if (!/^\d+$/.test(pastedData)) return;
    
    // Fill the OTP fields with pasted data
    const otpDigits = pastedData.slice(0, 6).split("");
    const newOtp = [...otp];
    
    otpDigits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });
    
    setOtp(newOtp);
    
    // Focus the next empty field or the last field
    const lastFilledIndex = Math.min(otpDigits.length - 1, 5);
    if (lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if OTP is complete
    if (otp.some(digit => digit === "")) {
      setError("Please enter the complete verification code");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to verify OTP
    setTimeout(() => {
      const enteredOtp = otp.join("");
      console.log("Verifying OTP:", enteredOtp);
      
      // For demo purposes, let's say "123456" is the correct OTP
      if (enteredOtp === "123456") {
        // Redirect to success page or dashboard
        navigate("/", {
          state: {
            notification: {
              type: "success",
              message: "Phone number verified successfully!"
            }
          }
        });
      } else {
        setIsSubmitting(false);
        setError("Invalid verification code. Please try again.");
      }
    }, 1500);
  };

  const handleResendOtp = () => {
    if (resendCountdown > 0) return;
    
    setIsResending(true);
    
    // Simulate API call to resend OTP
    setTimeout(() => {
      setIsResending(false);
      setResendCountdown(30);
      console.log("OTP resent");
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

        {/* OTP Verification header */}
        <h1 className="text-2xl font-semibold text-center mb-8">Verification Code</h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8">
          We've sent a verification code to your phone number. Please enter the code below.
        </p>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          {/* OTP Input Fields */}
          <div className="flex justify-between gap-2 mb-6">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleOtpChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 text-center text-xl font-semibold rounded-md"
                autoFocus={index === 0}
              />
            ))}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1A1D21] text-white rounded-full py-6"
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </form>

        {/* Resend OTP */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Didn't receive the code?
          </p>
          <Button
            type="button"
            variant="link"
            onClick={handleResendOtp}
            disabled={resendCountdown > 0 || isResending}
            className="text-black font-semibold"
          >
            {isResending 
              ? "Sending..." 
              : resendCountdown > 0 
                ? `Resend code in ${resendCountdown}s` 
                : "Resend code"}
          </Button>
        </div>

        {/* Demo hint */}
        <div className="mt-6 p-3 bg-blue-50 rounded-md">
          <p className="text-blue-700 text-sm text-center">
            <strong>Demo:</strong> Enter "123456" as the verification code to proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

