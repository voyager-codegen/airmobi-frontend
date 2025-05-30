import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IphonePro } from "./screens/IphonePro/IphonePro";
import { Details } from "./screens/Details/Details";
import { MyAccount } from "./screens/MyAccount/MyAccount";
import { Message } from "./screens/Message/Message";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<IphonePro />} />
        <Route path="/details" element={<Details />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  </StrictMode>
);