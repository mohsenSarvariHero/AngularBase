
import './App.css'
import PopUp from './popUp/PopUp'
import React, { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center mt-10 text-amber-50">
     <button className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3" onClick={() => setShowModal(true)}>ورود / ثبت نام</button>

      {showModal && <Lo onclose={()=>setShowModal(false)} />}
      </div>
  )
}

export default App


