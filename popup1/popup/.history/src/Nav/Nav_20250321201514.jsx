import React, { useState } from "react";
import Popup from "./Popup";

const Nav = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
