import React, { useState } from "react";
import Popup from "./../popUp/PopUp";

const Nav = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // این تابع وضعیت پاپ‌اپ را تغییر می‌دهد و آن را بسته می‌کند
  const closePopup = () => {
    setIsPopupOpen(false);
  };
//   function closePopup(){
//     setIsPopupOpen(false);

//   }

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div>
      <button
        onClick={openPopup}
        className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
      >
        ورود / ثبت نام
      </button>

      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Nav;
