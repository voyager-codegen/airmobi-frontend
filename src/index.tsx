import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IphonePro } from "./screens/IphonePro/IphonePro";
import { Details } from "./screens/Details/Details";
import { MyAccount } from "./screens/MyAccount/MyAccount";
import { Message } from "./screens/Message/Message";
import { SignIn } from "./screens/Auth/SignIn";
import { SignUp } from "./screens/Auth/SignUp";
import { ForgotPassword } from "./screens/Auth/ForgotPassword";
import { EmailVerification } from "./screens/Auth/EmailVerification";
import { ResetPassword } from "./screens/Auth/ResetPassword";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IphonePro />} />
        <Route path="/details" element={<Details />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/message" element={<Message />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  </StrictMode>
);

