import React, { useRef, useEffect } from "react";

const Popup = ({ onClose }) => {
  const popupRef = useRef();

  // این Effect رو می‌زنیم که وقتی کاربر در خارج از پاپ‌اپ کلیک کرد، پاپ‌اپ بسته بشه.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose(); // بسته شدن پاپ‌اپ وقتی که کاربر خارج از اون کلیک کرد
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // تمیز کردن Event Listener زمانی که کامپوننت از صفحه خارج میشه
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

export default Popup;
