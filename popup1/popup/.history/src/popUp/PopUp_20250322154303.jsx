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
//                 </div>
//             </div>    
//             }
            
//         </div>
//     )
// }











export default function PopUp({ setOpenPopup }) {

    return (
        <div className="bg-amber-500">
            <div className="text-neutral-900">
                <h1>ورود</h1>
                <input type="text" />
                <input type="submit" />
                <button onClick={()=>}>close</button>

                {/* دکمه بستن پاپ آپ */}
                <button onClick={() => setOpenPopup(false)}>بستن</button>
            </div>
        </div>
    );
}
