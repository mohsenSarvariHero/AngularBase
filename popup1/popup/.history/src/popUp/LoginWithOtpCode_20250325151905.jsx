import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginWithOtpCode() {
  const modalref = useRef();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 
  
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
      setTimeout(() => {
        navigate("/");  
      }, 500);
    }
  };

  useEffect(() => {
    setShowModal(true);

    const handleClickOutside = (e) => {
      if (modalref.current && !modalref.current.contains(e.target)) {
        navigate("/");  
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navigate]);

  return (
    <div
      ref={modalref}
      onClick={closemodal}
      className={`fixed inset-0 text-amber-50 backdrop-blur-xs flex justify-center items-center mb-5 transition-all duration-500 ${showModal ? "opacity-100" : "opacity-0"}`}
    >
      <div className="mt-10 flex flex-col gap-5 text-black">
        <div className="rounded-xl bg-white flex flex-col gap-5 items-center mx-4 shadow-2xl w-[700px] h-[600px] mb-5 transition-all duration-500 transform ">
          <div className="flex flex-col items-center">
            <h1
              className="text-[#1d2b3e] text-[35px] font-bold mt-9 "
              style={{ textShadow: "3px 3px 0px #B5CDF3" }}
            >
              ورود
            </h1>

            <div className="relative flex flex-col mt-5">
              <label
                htmlFor="emailOrPhone"
                className="absolute right-2 top-2 text-l font-semibold text-[#334155] bg-white px-1 mr-3"
              >
                شماره موبایل
              </label>
              <input
                type="email"
                id="emailOrPhone"
                placeholder="0912 345 6789"
                className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-6 focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col items-center mt-20">
              <Link
                type="submit"
                className="bg-[#3B82F6] text-white w-[160px] h-[40px] cursor-pointer font-bold rounded-xl mt-10 flex justify-center items-center"
                to="/OTPCode"
              >
                ارسال کد
              </Link>
              <Link
                type="submit"
                className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[140px] h-[40px] flex justify-center items-center cursor-pointer rounded-xl mt-5 font-bold text-[15px]"
                to="/Login"
              >
                ورود با رمز عبور
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center mt-7">
              <p className="text-[#334155] text-[14px] font-medium">
                !حساب کاربری ندارم
              </p>
              <Link className="text-[#3B82F6] text-[18px] font-extrabold mt-2 cursor-pointer" to="/SignupWithEmail">
                ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWithOtpCode;
