import React , {useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
import '../../Css/signInRegisterCss.css'
import { useHistory } from "react-router-dom"
import logo from '../../Pngs/IUT.png'

function LogIn(props) {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const [errorToggle , setErrorToggle] = useState("hidden")
    const [errorM , setErrorM] = useState("")
    let history = useHistory()

    if(localStorage.getItem("token") != null){
        history.push("/Home")
    }

    function onButtonClick(event) {
        event.preventDefault();
        setErrorToggle("hidden")
        axios.post('http://mrm781.pythonanywhere.com/api/account/login', 
        {
            username : userName,
            password : password
        })
          .then((response) => {
            if(response.status === 200){
                localStorage.setItem("token",response.data.data.token)
                history.push("/Home")
            }
            
          }, (error) => {

            console.log(error)
            if(error.response.status === 422)
            {
                setErrorM( "!رمز شما اشتباه است")
                setErrorToggle("visible")
            }
            else
            {
                setErrorM("!مشکلی پیش آمده است لطفا دوباره امتحان کنید")
                setErrorToggle("visible")
            }

          });    
    }

    return (
            <div className="margin text-center">
                <h6 style ={{marginTop:"10%" , color:"red" , visibility: errorToggle}} className="h6 mb-3 fw-normal"> {errorM} </h6>
                <img src={logo} className = "logo" />
                <h1 className="h3 mb-3 fw-normal">سامانه مدیریت خوابگاه های دانشجویی دانشگاه صنعتی اصفهان</h1>
                <h1 className="h3 mb-3 fw-normal">ورود</h1>
                <main className="form-signin">
                    <form>
                        
                        <div className="form-floating">
                        <input type="userName" className="form-control" dir="rtl" value = {userName} placeholder="UserName" onChange = {
                                e => setUserName(e.target.value) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">کلمه عبور</div></label>
                        </div>

                        <div className="form-floating">
                        <input type="password" className="form-control" dir="rtl" placeholder="Password" value = {password} onChange = {e => setPassword(e.target.value) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">رمز عبور</div></label>
                        </div>

                        <div>
                        <button className="w-100 btn btn-md btn-primary" type="button" onClick= {onButtonClick}>ورود</button>
                        <Link to='/Register' className ="w-100 btn btn-sm btn-link">ثبت نام</Link>
                        </div>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </main>
                
            </div>
    )
}

export default LogIn