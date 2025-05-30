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



import React from 'react'
import { X } from 'lucide-react';

function PopUp() {
  return (
    <div className="fixed inset-0 bg-black text-amber-50 opacity-50 backdrop-blur-sm">

    <div>
        <button><X/></button>
        <h1>ورود</h1>
        <form>
            <input type='email'
                placeholder='enter your email'
                required
            />
            <button>enter</button>
        </form>
    </div>
      
    </div>
  )
}

export default PopUp
