
import './App.css'
import Nav from './Nav/Nav'
import PopUp from './popUp/PopUp'
import React, { useState } from 'react';
import PopUp from '../popUp/PopUp';
function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center mt-10 text-amber-50">
      <button className="bg-fuchsia-900 p-5" onClick={() => setShowModal(true)}>
        ورود
      </button>
      {showModal && <PopUp onclose={()=>setShowModal(false)} />}
      </div>
  )
}

export default App
