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

import React, { useRef } from "react";
import { X } from "lucide-react";

function PopUp({ onclose }) {
  const modalref = useRef();
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      onclose();
    }
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
            <div className="relative flex flex-col mt-5">
            <label htmlFor="password"
                className="absolute right-2 bottom-12 text-l font-semibold text-[#334155] bg-white px-1 mr-3">رمز عبور</label>
              <input type="password" required className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-2" />
            </div>
            {/* <div className="flex flex-col justify-center"> */}
              <a className="text-[#3B82F6] flex justify-center mt-4 text-[11px] font-normal cursor-pointer">فراموشی رمز عبور</a>
              <div className="flex flex-col items-center ">
              <button type="submit" className="bg-[#3B82F6] text-white w-[135px] h-[45px] font-bold rounded-xl mt-10">تایید</button>
              <button type="submit" className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[250px] h-[50px] rounded-xl mt-7">ورود با رمز یکبار مصرف</button>
              </div>
              <a>حساب کاربری ندارم!</a>
              <a>ثبت نام</a>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
