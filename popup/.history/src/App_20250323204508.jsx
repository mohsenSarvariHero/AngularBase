import './App.css'
import ForgetPassword from './popUp/ForgetPassword';
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
      <Route path="/" element={<div>صفحه اصلی</div>} /> 
      <Route path="/Login" element={<Login/>}/>
      <Route path="/ForgetPassword.jsx" element={<ForgetPassword />} />
        {/* <Route path="/ForgetPassword" element={<ForgetPassword />} /> */}
      </Routes>
    </div>
  </Router>
  )
}

export default App



// import './App.css';
// import ForgetPassword from './popUp/ForgetPassword';
// import Login from './popUp/Login';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'; // اضافه کردن مسیریابی

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const openLoginModal = () => setShowModal(true);
//   const closeLoginModal = () => setShowModal(false);

//   return (
//     <Router>
//       <div className="flex justify-center mt-10 text-amber-50">
//         <button
//           className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3"
//           onClick={openLoginModal}
//         >
//           ورود / ثبت نام
//         </button>

//         {/* نمایش پاپ‌آپ Login */}
//         {showModal && <Login onclose={closeLoginModal} />}

//         {/* مسیرهای اپلیکیشن */}
//         <Routes>
//           <Route path="/" element={<div>صفحه اصلی</div>} /> {/* صفحه اصلی */}
//           <Route
//             path="/login"
//             element={<Login onclose={closeLoginModal} />}
//           />
//           <Route path="/Forget" element={<ForgetPassword />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
