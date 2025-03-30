// import { useState } from "react"

// export default function PopUp(){

//     const[openPopup,setopenPopup]=useState(false)
//     return(
//         <div>
//             {
//                 openPopup &&
//                 <div className="bg-amber-500">
//                 <div className="text-neutral-900">
//                     <h1>ورود</h1>
//                     <input type="text"/>
//                     <input type="submit"/>
//                     <button onClick={() => setOpenPopup(false)}>بستن</button>;

//                 </div>
//             </div>
//             }

//         </div>
//     )
// }

// export default function PopUp({ setOpenPopup }) {
//   return (
//     <div className="bg-amber-500">
//       <div className="text-neutral-900">
//         <h1>ورود</h1>
//         <input type="text" />
//         <input type="submit" />
//         <button onClick={() => setOpenPopup(false)}>close</button>

//         {/* دکمه بستن پاپ آپ */}
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";
// import { Eye } from 'lucide-react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PopUp({ onclose }) {
  const modalref = useRef();
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      onclose();
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword);
  };

  return (
    <div
      ref={modalref}
      onClick={closemodal}
      className="fixed inset-0 text-amber-50  backdrop-blur-xs flex justify-center items-center mb-5"
    >
      <div className="mt-10 flex flex-col gap-5 text-black">
        <div className="rounded-xl bg-white flex flex-col gap-5 items-center mx-4 border-1 border-black w-[700px] h-[600px] mb-5">
          <h1
            className="text-[#1d2b3e] text-[35px] font-bold mt-9 "
            style={{ textShadow: "3px 3px 0px #B5CDF3" }}
          >
            ورود
          </h1>
          <form className="flex flex-col">
            <div className="relative flex flex-col mt-5">
              <label
                htmlFor="emailOrPhone"
                className="absolute right-2 top-2 text-l font-semibold text-[#334155] bg-white px-1 mr-3"
              >
                ایمیل / شماره موبایل
              </label>
              <input
                type="email"
                id="emailOrPhone"
                placeholder="youremailaddress@gmail.com / 0912 345 6789"
                className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-6"
                required
              />
            </div>
            import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // آیکون‌های چشم از react-icons

function PasswordInput() {
  // وضعیت برای مخفی کردن یا نمایش دادن رمز عبور
  const [showPassword, setShowPassword] = useState(false); // مقدار پیش‌فرض: false یعنی رمز مخفی است

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // تغییر وضعیت مخفی/نمایش رمز
  };

  return (
    <div className="relative flex flex-col mt-5">
      <label
        htmlFor="password"
        className="absolute right-2 bottom-12 text-l font-semibold text-[#334155] bg-white px-1 mr-3"
      >
        رمز عبور
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'} // در صورتی که showPassword برابر true باشد، رمز نمایان می‌شود
          id="password"
          required
          className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-2"
          placeholder="رمز عبور خود را وارد کنید"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? (
            <FaEyeSlash size={20} color="#334155" /> // نمایش آیکون چشم بسته
          ) : (
            <FaEye size={20} color="#334155" /> // نمایش آیکون چشم باز
          )}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;


            <a className="text-[#3B82F6] flex justify-center mt-4 text-[11px] font-normal cursor-pointer">
              فراموشی رمز عبور
            </a>
            <div className="flex flex-col items-center ">
              <button
                type="submit"
                className="bg-[#3B82F6] text-white w-[135px] h-[45px] cursor-pointer font-bold rounded-xl mt-10"
              >
                تایید
              </button>
              <button
                type="submit"
                className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[200px] h-[50px] cursor-pointer rounded-xl mt-5 font-bold text-[15px]"
              >
                ورود با رمز یکبار مصرف
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mt-7">
              <a className="text-[#334155] text-[14px] font-medium">
                !حساب کاربری ندارم
              </a>
              <a className="text-[#3B82F6] text-[18px] font-extrabold mt-2 cursor-pointer">
                ثبت نام
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
