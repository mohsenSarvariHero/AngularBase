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
    <div ref={modalref} onClick={closemodal} className="fixed inset-0 bg-black text-amber-50 opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-red-700">
        <div className="rounded-xl bg-white px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className='text-[#334155] text-[20px] font-semibold'>ورود</h1>
          <form>
            <input type="email" placeholder="enter your email" required />
            <button type="submit">enter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
