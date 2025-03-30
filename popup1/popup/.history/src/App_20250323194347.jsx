import './App.css'
import ForgotPassword from './popUp/ForgetPassword';
import Login from './popUp/Login';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // اضافه کردن مسیریابی

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
    <div className="flex justify-center mt-10 text-amber-50">
      <button
        className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
        onClick={() => setShowModal(true)}
      >
        ورود / ثبت نام
      </button>

      {showModal && <Login onclose={() => setShowModal(false)} />}

      <Routes>
      <Rout
        {/* <Route path="/ForgetPassword" element={<ForgetPassword />} /> */}
      </Routes>
    </div>
  </Router>
  )
}

export default App


