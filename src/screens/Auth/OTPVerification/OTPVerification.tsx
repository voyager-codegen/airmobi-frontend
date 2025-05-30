import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const OTPVerification = (): JSX.Element => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState<number>(60);
  const [isResendActive, setIsResendActive] = useState<boolean>(false);

  // Initialize timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsResendActive(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle OTP input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;
    
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    if (!/^\d+$/.test(pastedData)) return;
    
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, 4); i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last one
    const lastFilledIndex = Math.min(pastedData.length - 1, 3);
    if (lastFilledIndex < 3) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    }
  };

  // Handle resend OTP
  const handleResendOTP = () => {
    if (!isResendActive) return;
    
    // Reset timer and OTP
    setOtp(Array(4).fill(""));
    setTimer(60);
    setIsResendActive(false);
    
    // Focus the first input
    inputRefs.current[0]?.focus();
    
    // TODO: Add API call to resend OTP
    console.log("Resending OTP...");
  };

  // Handle verify button click
  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      // TODO: Add API call to verify OTP
      console.log("Verifying OTP:", otpValue);
      // Navigate to next screen on success
      // navigate("/auth/reset-password");
    }
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
            OTP Verification
          </h1>
          
          <p className="mt-4 text-gray-600 font-['Inter'] text-base">
            Enter the verification code we just sent to your email address.
          </p>

          {/* OTP Input Fields */}
          <div className="flex justify-between mt-8">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-16 h-16 text-center text-2xl font-bold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus={index === 0}
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="mt-6 flex justify-center">
            <p className="text-gray-600 font-['Inter'] text-sm">
              Didn't receive code? 
              <button 
                onClick={handleResendOTP}
                disabled={!isResendActive}
                className={`ml-1 ${isResendActive ? 'text-blue-600 font-medium' : 'text-gray-400'}`}
              >
                {isResendActive ? 'Resend' : `Resend in ${timer}s`}
              </button>
            </p>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            disabled={otp.join("").length !== 4}
            className="w-full mt-10 h-14 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

