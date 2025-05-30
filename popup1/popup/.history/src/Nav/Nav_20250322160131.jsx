// import PopUp from "./../popUp/PopUp";


// export default function Nav(){

//     return(
//         <div>
//         <button onClick={()=>setopenPopup(true)} className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3">ورود / ثبت نام</button>

//         </div>
//     )
// }



// import { useState } from "react";
// import PopUp from "./../popUp/PopUp"; // فرض می‌کنیم PopUp رو ایمپورت کرده باشیم

// export default function Nav() {
//     const [openPopup, setOpenPopup] = useState(false); // اینجا state رو می‌سازیم

//     return (
//         <div>
//             <button 
//                 onClick={() => setOpenPopup(true)} 
//                 className="rounded-[8px] bg-[#EBF2FE] cursor-pointer text-[#3B82F6] p-3">
//                 ورود / ثبت نام
//             </button>

//             {/* وقتی openPopup درست شد، PopUp رو نشون می‌دهیم */}
//             {openPopup && <PopUp setOpenPopup={setOpenPopup} />}
//         </div>
//     );
// }






import React from 'react'
import PopUp from '../popUp/PopUp'
function Nav() {
  return (
    <div className='flex justify-center mt-10 cursor-pointer text-amber-50'>
      <button className='bg-fuchsia-900 p-5 '>ورود</button>
    </div>
  )
}

export default Nav