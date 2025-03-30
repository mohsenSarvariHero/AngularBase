import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./popUp/Login";
function Enter() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center mt-10 text-amber-50">
    <Link
      className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
      onClick={() => setShowModal(true)}
      to="/Login"
    >
      ورود / ثبت نام
    </Link>

  </div>

  )
}

export default Enter
