import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IphonePro } from "./screens/IphonePro/IphonePro";
import { Details } from "./screens/Details/Details";
import { MyAccount } from "./screens/MyAccount/MyAccount";
import { Message } from "./screens/Message/Message";
import { OTPVerification } from "./screens/Auth/OTPVerification";
import { ForgotPassword } from "./screens/Auth/ForgotPassword";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IphonePro />} />
        <Route path="/details" element={<Details />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/message" element={<Message />} />
        <Route path="/auth/otp-verification" element={<OTPVerification />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  </StrictMode>
);

