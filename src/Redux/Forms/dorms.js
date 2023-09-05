import React from 'react'
import { useHistory } from "react-router-dom";

function Dorms() {

    let history = useHistory();
    function backButton() {
        history.push("/Home");
    }

    
    return (
        <div>
            <div>
                <div style={{width: "15%"}} onClick= {backButton} className="btn btn-outline-dark btn-sm  m-2 mr-100 ps-1 logo">
                    <div className="h6">بازگشت</div>
                </div>
                <div style={{marginBottom:"10%"}} className="h1 d-flex justify-content-center">خوابگاه ها</div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">خوابگاه</th>
                        <th scope="col">ID</th>
                        <th scope="col">نام</th>
                        <th scope="col">جنسیت</th>
                        <th scope="col">موقعیت مکانی</th>
                        <th scope="col">تعداد طبقه</th>
                        <th scope="col">تعداد اتاق</th>
                        <th scope="col">هزینه سالانه</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>1</td>
                        <td>Alghadir11</td>
                        <td>Mard</td>
                        <td>Jonoob</td>
                        <td>4</td>
                        <td>100</td>
                        <td>300000</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>2</td>
                        <td>Alghadir12</td>
                        <td>Mard</td>
                        <td>Jonoob</td>
                        <td>4</td>
                        <td>100</td>
                        <td>300000</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>3</td>
                        <td>Alghadir13</td>
                        <td>Mard</td>
                        <td>Jonoob</td>
                        <td>4</td>
                        <td>100</td>
                        <td>300000</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>4</td>
                        <td>bala3</td>
                        <td>Mard</td>
                        <td>Shomal</td>
                        <td>5</td>
                        <td>150</td>
                        <td>350000</td>
                        </tr>
                        <tr>
                        <th scope="row">5</th>
                        <td>5</td>
                        <td>bala5</td>
                        <td>Mard</td>
                        <td>Shomal</td>
                        <td>3</td>
                        <td>80</td>
                        <td>250000</td>
                        </tr>
                        <tr>
                        <th scope="row">6</th>
                        <td>6</td>
                        <td>sadaf7</td>
                        <td>Zan</td>
                        <td>Shomal</td>
                        <td>5</td>
                        <td>200</td>
                        <td>300000</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{width: "15%"}}  className="btn btn-primary  m-2 mr-100 ps-1 logo ">
                    <div className="h6 ">اضافه کردن</div>
                </div>    
            </div>
            
        </div>
    )
}

export default Dorms
