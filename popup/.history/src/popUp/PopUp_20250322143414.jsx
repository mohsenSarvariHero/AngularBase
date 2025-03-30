import { useState } from "react"

export default function PopUp(){

    const[openPopup,setopenPopup]=useState(false)
    return(
        <div>
            {
                openPopup &&
                
            }
            <div>
                <div>
                    <h1>ورود</h1>
                </div>
            </div>
        </div>
    )
}