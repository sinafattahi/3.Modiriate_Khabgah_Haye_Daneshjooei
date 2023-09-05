import React from 'react'
import { useHistory } from "react-router-dom"
import logo from './Pngs/IUT.png'

function Home() {
    let history = useHistory();

    function exitButton(){
        localStorage.removeItem("token")
        history.push("/");
    }
    function dorms(){
        history.push("/dorms");
    }
    function students(){
        history.push("/students");
    }
    function rooms(){
        history.push("/rooms");
    }
    function groups(){
        history.push("/groups");
    }
    function observers(){
        history.push("/observers");
    }
    function shifts(){
        history.push("/shifts");
    }
    function payments(){
        history.push("/payments");
    }
    function reserves(){
        history.push("/reserves");
    }
    return (
        <div style={{backgroundColor: "#F8F9FA"}} className="row text-center">
            <div style={{padding: "0%"}} className="container">
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                    <div style={{width: "5%"}} onClick= {exitButton} className="btn btn-outline-dark btn-sm  m-2 mr-100 ps-1 logo" dir="ltr"> <div className="h6">خروج</div></div>          
                    <h1 className="h3 mb-3 fw-normal">سامانه مدیریت خوابگاه های دانشجویی دانشگاه صنعتی اصفهان</h1>
                    <img src={logo} className = "logo" dir="mtl" />                    
                </nav>
            </div>
            <div style={{margin: "20px 20px" }}/>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" onClick= {groups} className="btn btn-outline-dark">گروه ها</button>
                <button type="button" onClick= {students} className="btn btn-outline-primary">دانشجویان</button>
                <button type="button" onClick= {rooms} className="btn btn-outline-dark">اتاق ها</button>
                <button type="button" onClick= {dorms} className="btn btn-outline-primary">خوابگاه ها</button>   
            </div>
            <div style={{margin: "20px 20px" }}/>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" onClick= {shifts} className="btn btn-outline-primary">شیفت ناظران</button>
                <button type="button" onClick= {observers} className="btn btn-outline-dark">ناظران</button>
                <button type="button" onClick= {payments} className="btn btn-outline-primary">پرداختی ها</button>
                <button type="button" onClick= {reserves} className="btn btn-outline-dark">رزرو کردن</button>
            </div>
            
            
        </div>
    )
}

export default Home
