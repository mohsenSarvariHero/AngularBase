// import "./App.css";
// import ForgetPassword from "./popUp/ForgetPassword";
// import LoginWithOtpCode from "./popUp/LoginWithOtpCode";
// import OTPCode from "./popUp/OTPCode"
// import ResendOtpCode from "./popUp/ResendOtpCode"
// import EnterPasswordFromPhone from "./popUp/EnterPasswordFromPhone"
// import EnterPasswordFromEmail from "./popUp/EnterPasswordFromEmail"
// import ChangePassword from "./popUp/ChangePassword"
// import SignupWithEmail from "./popUp/SignupWithEmail"
// import SignupWithPhone from "./popUp/SignupWithPhone"
// import Login from "./popUp/Login";
// // import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// function App() {

//   return (
//     <Router>
//       <div className="flex justify-center mt-10 text-amber-50">


//         <Routes>
//           {/* اینحا من اینو همینطوری نوشتم ولی میتونی این ورود ثبت نام رو تو ی کامپوننت دیگ بنویسی */}
//           <Route path="/" element={<Link to={"Login"} className="text-black">ورود / ثبت نام</Link>} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/ForgetPassword" element={<ForgetPassword />} />
//           <Route path="/LoginWithOtpCode" element={<LoginWithOtpCode />} />
//           <Route path="/OTPCode" element={<OTPCode />} />
//           <Route path="/ResendOtpCode" element={<ResendOtpCode />} />
//           <Route path="/EnterPasswordFromPhone" element={<EnterPasswordFromPhone />} />
//           <Route path="/EnterPasswordFromEmail" element={<EnterPasswordFromEmail />} />
//           <Route path="/ChangePassword" element={<ChangePassword />} />
//           <Route path="/SignupWithEmail" element={<SignupWithEmail />} />
//           <Route path="/SignupWithPhone" element={<SignupWithPhone />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





















import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./popUp/Login";
import ForgetPassword from "./popUp/ForgetPassword";
import LoginWithOtpCode from "./popUp/LoginWithOtpCode";
import OTPCode from "./popUp/OTPCode";
import ResendOtpCode from "./popUp/ResendOtpCode";
import EnterPasswordFromPhone from "./popUp/EnterPasswordFromPhone";
import EnterPasswordFromEmail from "./popUp/EnterPasswordFromEmail";
import ChangePassword from "./popUp/ChangePassword";
import SignupWithEmail from "./popUp/SignupWithEmail";
import SignupWithPhone from "./popUp/SignupWithPhone";

function App() {
  const [showPopup, setShowPopup] = useState(false); // وضعیت نمایش پاپ‌آپ
  const [currentPopup, setCurrentPopup] = useState(""); // نام پاپ‌آپ فعلی که باز است

  const openPopup = (popupName) => {
    setCurrentPopup(popupName);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Router>
      <div className="flex justify-center mt-10 text-amber-50">
        {/* صفحه اصلی (ورود/ثبت‌نام) */}
        <Routes>
          <Route
            path="/"
            element={<Link to={"Login"} className="text-black">ورود / ثبت نام</Link>}
          />
          {/* نمایش پاپ‌آپ‌ها */}
          <Route
            path="/Login"
            element={<Login onClose={closePopup} />}
          />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/LoginWithOtpCode" element={<LoginWithOtpCode />} />
          <Route path="/OTPCode" element={<OTPCode />} />
          <Route path="/ResendOtpCode" element={<ResendOtpCode />} />
          <Route path="/EnterPasswordFromPhone" element={<EnterPasswordFromPhone />} />
          <Route path="/EnterPasswordFromEmail" element={<EnterPasswordFromEmail />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route path="/SignupWithEmail" element={<SignupWithEmail />} />
          <Route path="/SignupWithPhone" element={<SignupWithPhone />} />
        </Routes>

        {/* نمایش پاپ‌آپ‌ها */}
        {showPopup && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={closePopup}
          >
            <div
              className="bg-white p-8 rounded-xl"
              onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن پاپ‌آپ هنگام کلیک روی خود پاپ‌آپ
            >
              {currentPopup === "Login" && <Login onClose={closePopup} />}
              {currentPopup === "ForgetPassword" && <ForgetPassword />}
              {/* سایر پاپ‌آپ‌ها */}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
