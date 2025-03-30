import "./App.css";
import ForgetPassword from "./popUp/ForgetPassword";
import LoginWithOtpCode from "./popUp/LoginWithOtpCode";
import OTPCode from "./popUp/OTPCode"
import ResendOtpCode from "./popUp/ResendOtpCode"
import EnterPasswordFromPhone from "./popUp/EnterPasswordFromPhone"
import EnterPasswordFromEmail from "./popUp/EnterPasswordFromEmail"
import ChangePassword from "./popUp/ChangePassword"
i
import Login from "./popUp/Login";
// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="flex justify-center mt-10 text-amber-50">


        <Routes>
          {/* اینحا من اینو همینطوری نوشتم ولی میتونی این ورود ثبت نام رو تو ی کامپوننت دیگ بنویسی */}
          <Route path="/" element={<Link to={"Login"} className="text-black">ورود / ثبت نام</Link>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/LoginWithOtpCode" element={<LoginWithOtpCode />} />
          <Route path="/OTPCode" element={<OTPCode />} />
          <Route path="/ResendOtpCode" element={<ResendOtpCode />} />
          <Route path="/EnterPasswordFromPhone" element={<EnterPasswordFromPhone />} />
          <Route path="/EnterPasswordFromEmail" element={<EnterPasswordFromEmail />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/SignupWithEmail" element={<SignupWithEmail />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
