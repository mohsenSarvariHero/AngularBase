import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";  // استفاده از PropTypes برای تایید نوع prop ها

const Popup = ({ onClose }) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      // بررسی می‌کنیم که آیا کاربر خارج از پاپ‌اپ کلیک کرده
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (typeof onClose === "function") {
          onClose(); // اگر onClose یک تابع است، آن را فراخوانی می‌کنیم
        } else {
          console.error("onClose is not a function");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // تمیز کردن eventListener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div ref={popupRef} className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-semibold">پاپ آپ</h2>
        <p>محتوای پاپ آپ اینجا نمایش داده می‌شود</p>
      </div>
    </div>
  );
};

// اضافه کردن PropTypes برای بررسی نوع داده‌ها
Popup.propTypes = {
  onClose: PropTypes.func.isRequired, // بررسی اینکه onClose یک تابع باشد
};

export default Popup;
