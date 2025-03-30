import React, { useRef, useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // اضافه کردن useNavigate

function EnterPasswordFromEmail({ onclose }) {
  const modalref = useRef();
  const [showPassword, setShowPassword] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();  // برای هدایت به صفحه جدید
  const closemodal = (e) => {
    if (modalref.current === e.target) {
      setShowModal(false);
      setTimeout(() => {
        // هدایت به صفحه‌ی مورد نظر بعد از بسته شدن پاپ‌آپ
        navigate("/EnterPassword");  // به صفحه‌ی مورد نظر هدایت می‌شود
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
          {/* محتویات پاپ‌آپ */}
          <h1 className="text-[#1d2b3e] text-[35px] font-bold mt-9">
            فراموشی رمز عبور
          </h1>
          {/* ادامه محتوای پاپ‌آپ */}
        </div>
      </div>
    </div>
  );
}

export default EnterPasswordFromEmail;
