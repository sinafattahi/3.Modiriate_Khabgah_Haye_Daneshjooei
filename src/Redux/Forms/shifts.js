import React from 'react'
import { useHistory } from "react-router-dom";

function Shifts() {

    let history = useHistory();
    function backButton() {
        history.push("/Home");
    }

    
    return (
        <div>
            <div>
                <h1>شیفت ناظران</h1>
                <div style={{width: "5%"}} onClick= {backButton} className="btn btn-outline-dark btn-sm  m-2 mr-100 ps-1 logo">
                    <div className="h6">بازگشت</div>
                </div>
            </div>
            
        </div>
    )
}

export default Shifts
