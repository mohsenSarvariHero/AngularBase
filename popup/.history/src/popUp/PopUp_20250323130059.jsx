// import { useState } from "react"

// export default function PopUp(){

//     const[openPopup,setopenPopup]=useState(false)
//     return(
//         <div>
//             {
//                 openPopup &&
//                 <div className="bg-amber-500">
//                 <div className="text-neutral-900">
//                     <h1>ورود</h1>
//                     <input type="text"/>
//                     <input type="submit"/>
//                     <button onClick={() => setOpenPopup(false)}>بستن</button>;

//                 </div>
//             </div>
//             }

//         </div>
//     )
// }

// export default function PopUp({ setOpenPopup }) {
//   return (
//     <div className="bg-amber-500">
//       <div className="text-neutral-900">
//         <h1>ورود</h1>
//         <input type="text" />
//         <input type="submit" />
//         <button onClick={() => setOpenPopup(false)}>close</button>

//         {/* دکمه بستن پاپ آپ */}
//       </div>
//     </div>
//   );
// }



import React, { useRef } from 'react';
import { X } from 'lucide-react';

function PopUp({onclose }) {
    const modalref=useRef();
    const closemodal= (e)=>{
        if(modalref.current===e.target){
            onclose();
        }
    }



  return (
    <div ref={modalref} onClick={closemodal} className="fixed inset-0 text-amber-50  backdrop-blur-xs flex justify-center items-center mb-5">
      <div className="mt-10 flex flex-col gap-5 text-black">
        <div className="rounded-xl bg-white flex flex-col gap-5 items-center mx-4 border-1 border-black w-[700px] h-[600px] mb-5">
          <h1 className='text-[#1d2b3e] text-[35px] font-bold mt-9 ' style={{ textShadow: '3px 3px 0px #B5CDF3' }}>ورود</h1>
          <form className='flex flex-col'>
            <input type="email" placeholder="youremailaddress@gmail.com / 0912 345 6789" className='border-4 border-[] px-5'    required />
            <input type="password" placeholder="enter your email" required />
            <a>فراموشی رمز عبور</a>
            <button type="submit">تایید</button>
            <button type="submit">ورود با رمز یکبار مصرف</button>
            <a>حساب کاربری ندارم!</a>
            <a>ثبت نام</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
