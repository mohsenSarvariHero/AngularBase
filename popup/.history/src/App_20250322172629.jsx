
import './App.css'
import PopUp from './popUp/PopUp'
import React, { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center mt-10 text-amber-50">
     <button className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3">ورود / ثبت نام</button>

      {showModal && <PopUp onclose={()=>setShowModal(false)} />}
      </div>
  )
}

export default App


<button className="bg-fuchsia-900 p-5" onClick={() => setShowModal(true)}>
        ورود
      </button>