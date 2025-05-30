import React, { useRef, useState, useEffect } from "react";
function ForgetPassword({ onclose }) {
  const modalref = useRef();
  const [showModal, setShowModal] = useState(false);
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
    return () => setShowModal(false);
  }, []);
  return (
    <div
      ref={modalref}
      onClick={closemodal}
      
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
            .رمز عبور را به شماره یا ایمیل زیر ارسال میکنیم            </p>
            </div>



            <form>
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
                className="border border-[#B5CDF3] rounded-md px-5 py-4 w-[400px] placeholder:text-[12px] mt-6 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col items-center mt-8">
               <button
                type="submit"
                className="bg-[#3B82F6] text-white w-[135px] h-[45px] cursor-pointer font-bold rounded-xl mt-10"
              >
                ارسال
              </button>
              <button
                type="submit"
                className="border border-[#3B82F6] bg-[#EBF2FE] text-[#3B82F6] w-[200px] h-[50px] cursor-pointer rounded-xl mt-5 font-bold text-[15px]"
              >
                ورود با رمز یکبار مصرف
              </button>
            </div>
             <div className="flex flex-col justify-center items-center mt-10">
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

export default ForgetPassword;
