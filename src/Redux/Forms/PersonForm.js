import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import { useHistory } from "react-router-dom";

function PersonForm() {
    const [name, setName] = useState({firstName : '' , lastName : ''})
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [factoryName, setFactoryName] = useState("")
    const [tileType, setTileType] = useState("")
    const [tilePrice, setTilePrice] = useState("")
    const [squareMeters, setSquareMeters] = useState("")
    const [orderDate, setOrderDate] = useState("")
    const [deliveryDate, setDeliveryDate] = useState("")
    let history = useHistory();

    function onButtonClick(event) {
        event.preventDefault()
        history.push("/Home")
        axios.post('http://mrm781.pythonanywhere.com/api/personal_order', 
        {
            "first_name" : name.firstName,
            "last_name" : name.lastName,
            "address": address,
            "phoneNumber": phoneNumber,
            "factoryName": factoryName,
            "tileType": tileType,
            "tilePrice": parseInt(tilePrice),
            "squareMeters": parseInt(squareMeters),
            "orderDate": orderDate,
            "deliveryDate":deliveryDate
        } ,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
        ).then((response) => {

            console.log(response)
            
          }, (error) => {

            console.log(error.message)

          });
        alert("ثبت شد")

    }
    return (
        <div>
            <div className="margin text-center">
                    <main className=" main">
                        <form style ={{width:"170%"}} className ="row">
                            <h1 style ={{marginTop:"10%"}} className="h3 mb-3 fw-normal">سفارش را ثبت کنید</h1>

                            <div className ="col-6">
                            <div className="form-floating">
                                <input type="Address" className="form-control" dir="rtl" id="floatingInput" value = {address} placeholder="Address" onChange = {
                                        e => setAddress(e.target.value) }/>
                                        <label className="col-12 float-right pe-2" dir="rtl" htmlFor="floatingInput"><div className="col-1 float-right">آدرس</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="PhoneNumber" className="form-control" dir="rtl" id="floatingPassword" placeholder="Phone Number" value = {phoneNumber} onChange = {e => setPhoneNumber(e.target.value) }/>
                                <label className="col-12 float-right pe-0" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">شماره ‌تلفن</div></label>
                            </div>
                            </div>

                            <div className="col-6">
                            <div className="form-floating">
                                <input type="FirstName" className=" form-control" dir="rtl" id="floatingInput" value = {name.firstName} placeholder="First Name" onChange = {
                                        e => setName({...name, firstName:e.target.value}) }/>
                                <label className="col-12 float-right pe-0" dir="rtl" htmlFor="floatingInput"><div className="col-1 float-right">نام</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="LastName" className="form-control" dir="rtl" id="floatingInput" value = {name.lastName} placeholder="Last Name" onChange = {
                                        e => setName({...name, lastName:e.target.value}) }/>
                                        <label className="col-12 float-right pe-1" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">نام خانوادگی</div></label>
                            </div>
                            </div>

                            <div className ="col-6 md-2">
                            <div className="form-floating">
                                <input type="TileArea" className="form-control" dir="rtl" id="floatingPassword" placeholder="Tile Price" value = {tilePrice} onChange = {e => setTilePrice(e.target.value) }/>
                                <label  className="col-12 float-right pe-0" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">قیمت کاشی</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="SquareMeters" className="form-control" dir="rtl" id="floatingPassword" placeholder="Square Meters" value = {squareMeters} onChange = {e => setSquareMeters(e.target.value) }/>
                                <label  className="col-12 float-right pe-2" dir="rtl" htmlFor="floatingInput"><div className="col-2 float-right">متر مربع</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="DeliveryDate" className="form-control" dir="rtl" id="floatingPassword" placeholder="Delivery Date" value = {deliveryDate} onChange = {e => setDeliveryDate(e.target.value) }/>
                                <label  className="col-12 float-right pe-1" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">تاریخ تحویل</div></label>
                            </div>
                            </div>

                            <div className ="col-6 md-2">
                            <div className="form-floating">
                                <input type="FactoryName" className="form-control" dir="rtl" id="floatingPassword" placeholder="Factory Name" value = {factoryName} onChange = {e => setFactoryName(e.target.value) }/>
                                <label  className="col-12 float-right pe-0" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">نام‌ کارخانه</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="TileType" className="form-control" dir="rtl" id="floatingPassword" placeholder="Tile Type" value = {tileType} onChange = {e => setTileType(e.target.value) }/>
                                <label  className="col-12 float-right pe-0" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">مدل کاشی</div></label>
                            </div>
                            <div className="form-floating">
                                <input type="OrderDate" className="form-control" dir="rtl" id="floatingPassword" placeholder="Order Date" value = {orderDate} onChange = {e => setOrderDate(e.target.value) }/>
                                <label  className="col-12 float-right pe-2" dir="rtl" htmlFor="floatingInput"><div className="col-3 float-right">تاریخ سفارش</div></label>
                            </div>
                            </div>

                            <div className="mt-2">
                                <button className="w-100 btn btn-md btn-primary" type="button" onClick= {onButtonClick}>ثبت</button>
                                <Link to='/Home' className ="w-100 btn btn-sm btn-link">لغو</Link>
                            </div>

                            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                        </form>
                    </main>
            </div>
    </div>
    )
}

export default PersonForm
