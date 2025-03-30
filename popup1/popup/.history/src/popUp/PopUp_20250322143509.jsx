import { useState } from "react"

export default function PopUp(){

    const[openPopup,setopenPopup]=useState(false)
    return(
        <div>
            {
                openPopup &&
                
            }
            <div className="">
                <div>
                    <h1>ورود</h1>
                    <input type="text"/>
                    <input type="submit"/>
                </div>
            </div>
        </div>
    )
}