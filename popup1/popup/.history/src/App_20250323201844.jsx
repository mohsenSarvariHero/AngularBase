// import './App.css'
// import ForgetPassword from './popUp/ForgetPassword';
// import Login from './popUp/Login';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // اضافه کردن مسیریابی

// function App() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <Router>
//     <div className="flex justify-center mt-10 text-amber-50">
//       <button
//         className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
//         onClick={() => setShowModal(true)}
//       >
//         ورود / ثبت نام
//       </button>

//       {showModal && <Login onclose={() => setShowModal(false)} />}

//       <Routes>
//       <Route path="/" element={<div>صفحه اصلی</div>} /> 
//       <Route path="/Login.jsx" element={<Login/>}/>
//       <Route path="/ForgetPassword.jsx" element={<ForgetPassword />} />
//         {/* <Route path="/ForgetPassword" element={<ForgetPassword />} /> */}
//       </Routes>
//     </div>
//   </Router>
//   )
// }

// export default App



import './App.css';
import ForgetPassword from './popUp/ForgetPassword';
import Login from './popUp/Login';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [showModal, setShowModal] = useState(false); // وضعیت پاپ‌آپ ورود
  const [modalContent, setModalContent] = useState('login'); // وضعیت محتوای پاپ‌آپ (login یا forgot-password)

  const openLoginModal = () => {
    setShowModal(true);
    setModalContent('login'); // زمانی که ورود را می‌خواهید، محتوا را به login تغییر دهید
  };

  const openForgetPasswordModal = () => {
    setModalContent('forgot-password'); // زمانی که فراموشی رمز عبور را می‌خواهید، محتوا را به forgot-password تغییر دهید
  };

  return (
    <Router>
      <div className="flex justify-center mt-10 text-amber-50">
        <button
          className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
          onClick={openLoginModal}
        >
          ورود / ثبت نام
        </button>

        {/* نمایش پاپ‌آپ */}
        {showModal && (
          <div className="modal">
            {modalContent === 'login' ? (
              <Login onclose={() => setShowModal(false)} />
            ) : modalContent === 'forgot-password' ? (
              <div>
                <h1>سلام خوبی؟</h1>
                <Link to="/forgot-password" className="text-[#3B82F6]">
                  فراموشی رمز عبور
                </Link>
              </div>
            ) : null}
          </div>
        )}

        {/* مسیرهای اپلیکیشن */}
        <Routes>
          <Route path="/" element={<div>صفحه اصلی</div>} />
          <Route path="/login" element={<Login onclose={() => setShowModal(false)} />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

