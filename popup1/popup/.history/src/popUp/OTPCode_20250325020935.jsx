


import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OTPCode({ onclose }) {
  const modalref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [seconds, setSeconds] = useState(30); // شمارش معکوس از 30 ثانیه
  const [values, setValues] = useState(["", "", "", "", ""]); // وقتی عدد رو وارد میکنیم خودش بره عدد بعدی

  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
      setTimeout(() => {
        onclose();
      }, 500);
    }
  };

  useEffect(() => {
    setShowModal(true);
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1); // کم شدن ثانیه‌ها
      }
    }, 1000); // هر 1 ثانیه

    return () => clearInterval(timerId);
  }, [seconds]);

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // فقط عدد را بپذیرید
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // اگر عدد وارد شد و فیلد جاری پر است، فوکوس به فیلد بعدی منتقل شود
    if (value && index < 4) {
      document.getElementById(`input-${index + 1}`).focus(); // انتقال فوکوس به فیلد بعدی
    }
  };

  return (
    <div
      ref={modalref}
      onClick={closemodal}
      className={`fixed inset-0 text-amber-50 backdrop-blur-xs flex justify-center items-center mb-5 transition-all duration-500 ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mt-10 flex flex-col gap-5 text-black">
        <div className="rounded-xl bg-white flex flex-col gap-5 items-center mx-4 shadow-2xl w-[700px] h-[600px] mb-5 transition-all duration-500 transform ">
          <div className="flex flex-col items-center">
            <h1
              className="text-[#1d2b3e] text-[35px] font-bold mt-9"
              style={{ textShadow: "3px 3px 0px #B5CDF3" }}
            >
              ورود
            </h1>
            <p className="mt-5 text-[13px] text-[#334155] mt-7">
              .یک کد 5 رقمی به شماره‌ی 6789 345 0912 ارسال شده
            </p>
            <a className="text-[13px] mt-5 text-[#3B82F6]">تغییر شماره</a>
          </div>
          <form className="flex flex-col items-end w-[350px] ">
            <label className="flex justify-self-start text-[#334155]">
              :کد ارسال‌شده را وارد کنید
            </label>
            <div className="mt-5 -mb-3.5 ">
              {[...Array(5)].map((_, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  value={values[index]} // مقادیر فیلدها از state گرفته می‌شود
                  onInput={(e) => handleInputChange(e, index)} // تغییر مقدار و انتقال فوکوس
                  className="border border-[#B5CDF3] w-[40px] h-[40px] rounded mr-5 text-center focus:outline-none text-[#334155]"
                />
              ))}
            </div>
          </form>
          <div className="w-[250px] flex flex-row items-end">
            <Link className="text-[12px] text-[#3B82F6] mr-5" to="/ResendOtpCode">
              ارسال دوباره کد
            </Link>
            <p className="text-[#334155] text-[14px]"> 00: {seconds}</p> {/* تایمر شمارش معکوس */}
          </div>
          <div className="flex flex-col items-center mt-3">
            <button
              type="submit"
              className="bg-[#3B82F6] text-white w-[120px] h-[40px] cursor-pointer font-bold rounded-xl mt-5"
            >
              تایید
            </button>
            <Link
              type="submit"
              className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[160px] h-[40px] flex justify-center items-center  cursor-pointer rounded-xl mt-5 font-bold text-[15px]"
              to="/Login"
            >
              ورود با رمز عبور
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-[#334155] text-[14px] font-medium">!حساب کاربری ندارم</p>
            <Link className="text-[#3B82F6] text-[18px] font-extrabold mt-2 cursor-pointer" to="/SignupWithEmail">
              ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPCode;






