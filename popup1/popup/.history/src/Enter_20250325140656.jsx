import React, { useState } from "react";

function Enter() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center mt-10 text-amber-50">
    <button
      className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
      onClick={() => setShowModal(true)}
    >
      ورود / ثبت نام
    </button>

    {showModal && <Login onclose={() => setShowModal(false)} />}
  </div>

  )
}

export default Enter
