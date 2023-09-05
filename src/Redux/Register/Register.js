import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import { useHistory } from "react-router-dom"
import logo from '../../Pngs/IUT.png'

function Register(props) {
    
    const [name, setName] = useState({firstName : '' , lastName : ''})
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")
    const [errorToggle , setErrorToggle] = useState("hidden")
    const [errorM , setErrorM] = useState("")
    let history = useHistory()

    if(localStorage.getItem("token") != null){
        history.push("/Home")
    }


    function onButtonClick(event) {
        setErrorToggle("hidden")
        event.preventDefault();

        axios.post('http://mrm781.pythonanywhere.com/api/account/register', 
        {
            username : userName,
            password : password,
            first_name : name.firstName,
            last_name : name.lastName
        })
          .then((response) => {
            localStorage.setItem("token",response.data.data.token)
            history.push("/Home");
          }, (error) => {
            console.log(error)
            if(error.response.status === 422)
            {
                setErrorM( "!کلمه عبور تکراری است")
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
            <h1 style ={{marginTop:"10%" , color:"red" , visibility: errorToggle}} className="h6 mb-3 fw-normal"> {errorM} </h1>
            <img src={logo} className = "logo" />
            <h1 className="h3 mb-3 fw-normal">سامانه مدیریت خوابگاه های دانشجویی دانشگاه صنعتی اصفهان</h1>
            <h1 className="h3 mb-3 fw-normal">ثبت نام</h1>       
                <main className="form-signin">
                    <form>                        
                        <div className="form-floating">
                        <input type="FirstName" className="form-control" dir="rtl" value = {name.firstName} placeholder="First Name" onChange = {
                                e => setName({...name, firstName:e.target.value}) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-1 float-right">نام</div></label>
                        </div>

                        <div className="form-floating">
                        <input type="LastName" className="form-control" dir="rtl" value = {name.lastName} placeholder="Last Name" onChange = {
                                e => setName({...name, lastName:e.target.value}) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-4 float-right">نام خانوادگی</div></label>
                        </div>

                        <div className="form-floating">
                        <input type="userName" className="form-control" dir="rtl" value = {userName} placeholder="User Name" onChange = {
                                e => setUserName(e.target.value) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">کلمه عبور</div></label>
                        </div>

                        <div className="form-floating">
                        <input type="password" className="form-control" dir="rtl" id="floatingPassword" placeholder="Password" value = {password} onChange = {e => setPassword(e.target.value) }/>
                        <label className="col-12 float-right" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">رمز عبور</div></label>
                        </div>

                        <div>
                        <button className="w-100 btn btn-md btn-primary" type="button" onClick= {onButtonClick}>ثبت نام</button>
                        <Link to='/' className ="w-100 btn btn-sm btn-link">لغو</Link>
                        </div>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </form>
                </main>
            </div>

            
    )
}

export default Register