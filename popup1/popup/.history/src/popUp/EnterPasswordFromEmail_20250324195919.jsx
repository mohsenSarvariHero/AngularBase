import React, { useRef, useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function EnterPasswordFromEmail({ onclose }) {
  const modalref = useRef();
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
 const location = useLocation();
  const email = location.state?.email;
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
      setTimeout(() => {
        onclose();
      }, 500);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setShowModal(true);
    return () => setShowModal(false);
  }, []);

  return (
    <div
      ref={modalref}
      onClick={closemodal}
      className={`fixed inset-0 text-amber-50 backdrop-blur-xs flex justify-center items-center mb-5 transition-all duration-500 ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mt-10 flex flex-col gap-5 text-black">
        <div
          className={`rounded-xl bg-white flex flex-col gap-5 items-center mx-4 shadow-2xl w-[700px] h-[600px] mb-5 transition-all duration-500 transform ${
            showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
<div className="flex flex-col items-center">
            <h1
              className="text-[#1d2b3e] text-[35px] font-bold mt-9"
              style={{ textShadow: "3px 3px 0px #B5CDF3" }}
            >
              فراموشی رمز عبور
            </h1>
            <p dir="rtl" className="mt-5 text-[13px]">
                    رمز عبور را به ایمیل {email}  ارسال کردیم                   </p>
            <a className="text-[#3B82F6] text-[12px] mt-5">تغییر ایمیل</a>
          </div>
          <div className="relative flex flex-col mt-5">
            <label
              htmlFor="password"
              className="absolute right-2 bottom-12 text-l bg-white z-10 font-semibold text-[#334155]  px-1 mr-3"
            >
              رمز عبور
            </label>
            <div className="relative">
              <input
                type={showPassword ? "password" : "text"}
                id="password"
                required
                className="border border-[#B5CDF3] rounded-md pl-15 px-5 py-4 w-[400px] placeholder:text-[12px] mt-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute left-5 top-9 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <FaEyeSlash size={20} color="#3B82F6" />
                ) : (
                  <FaEye size={20} color="#3B82F6" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Link
              type="submit"
              className="bg-[#3B82F6] text-white w-[135px] h-[45px] cursor-pointer font-bold rounded-xl mt-10"
              to="/ChangePassword"
            >
              تایید
            </Link>
            <Link
              type="submit"
              className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[200px] h-[50px] cursor-pointer rounded-xl mt-5 font-bold text-[15px]"
              to=""
            >
              ورود با رمز یکبار مصرف
            </Link>
          </div>
           <div className="flex flex-col justify-center items-center mt-7">
   <a className="text-[#334155] text-[14px] font-medium">
     !حساب کاربری ندارم
   </a>
   <a className="text-[#3B82F6] text-[18px] font-extrabold mt-2 cursor-pointer">
     ثبت نام
   </a>
   </div> 
        </div>
        </div>
        </div>
  )
}
export default EnterPasswordFromEmail