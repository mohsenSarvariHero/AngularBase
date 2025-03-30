

















import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // استفاده از useNavigate برای هدایت به صفحه دیگر
import { Link } from "react-router-dom";

function ForgetPassword() {
  const modalref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState(""); // ذخیره ورودی کاربر
  const [isEmail, setIsEmail] = useState(false); // بررسی اینکه ورودی ایمیل است یا شماره موبایل
  const navigate = useNavigate(); // استفاده از navigate برای هدایت به صفحه مقصد

  // بستن مدال در صورتی که کاربر بر روی فضای خالی کلیک کند
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
      setTimeout(() => {
        navigate("/"); 
      }, 500);
    }
  };

  // مدیریت تغییرات ورودی
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // بررسی اینکه ورودی ایمیل است یا شماره موبایل
    if (value.includes("@")) {
      setIsEmail(true); // ورودی ایمیل
    } else {
      setIsEmail(false); // ورودی شماره موبایل
    }
  };

  // ارسال فرم و هدایت به صفحه دیگر
  const handleSubmit = (e) => {
    e.preventDefault();

    // اگر ورودی ایمیل باشد، به صفحه ایمیل هدایت می‌شود
    if (isEmail) {
      navigate("/EnterPasswordFromEmail", {
        state: { email: inputValue }, // ارسال ایمیل به صفحه بعدی
      });
    } else {
      // اگر ورودی شماره موبایل باشد، به صفحه شماره تلفن هدایت می‌شود
      navigate("/EnterPasswordFromPhone", {
        state: { phone: inputValue }, // ارسال شماره تلفن به صفحه بعدی
      });
    }
  };

  // مدیریت نمایش/پنهان کردن مدال
   useEffect(() => {
      setShowModal(true);
      // اضافه کردن رویداد کلیک به مستندات
      const handleClickOutside = (e) => {
        if (modalref.current && !modalref.current.contains(e.target)) {
          navigate("/");  // هدایت به صفحه Enter در صورت کلیک خارج از پاپ‌آپ
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
              فراموشی رمز عبور
            </h1>
            <p className="mt-5 text-[13px]">
              رمز عبور را به شماره یا ایمیل زیر ارسال میکنیم
            </p>
          </div>

          {/* فرم دریافت ایمیل یا شماره تلفن */}
          <form onSubmit={handleSubmit}>
            <div className="relative flex flex-col mt-5">
              <label
                htmlFor="emailOrPhone"
                className="absolute right-2 top-2 text-l font-semibold text-[#334155] bg-white px-1 mr-3"
              >
                ایمیل / شماره موبایل
              </label>
              <input
                type="text"
                id="emailOrPhone"
                placeholder="youremailaddress@gmail.com / 0912 345 6789"
                className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-6 focus:outline-none"
                required
                value={inputValue}
                onChange={handleInputChange} // تغییر ورودی
              />
            </div>
            <div className="flex flex-col items-center mt-8">
              <button
                type="submit"
                className="bg-[#3B82F6] text-white w-[135px] h-[45px] cursor-pointer font-bold rounded-xl mt-10"
              >
                ارسال
              </button>
              <Link
                type="button"
                className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[200px] h-[50px] cursor-pointer rounded-xl mt-5 font-bold text-[15px] flex justify-center items-center"
                to="/LoginWithOtpCode"
              >
                ورود با رمز یکبار مصرف
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-[#334155] text-[14px] font-medium">
                !حساب کاربری ندارم
              </p>
              <Link className="text-[#3B82F6] text-[18px] font-extrabold mt-2 cursor-pointer" to="/SignupWithEmail">
                ثبت نام
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
