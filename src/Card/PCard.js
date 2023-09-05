import React from 'react'

function PCard(props) {
    return (
            <div className='cardBackground'>
                <div>
                    <div className='col-6 float-end'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                نام :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.firstName}
                            </h4>
                        </div>
                    </div>
                    <div className='col-6 float-start'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                نام خانوادگی :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.lastName}
                            </h4>
                        </div>                  
                    </div>
                </div>

                <hr/>

                <div>
                    <div className='col-6 float-end'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                نام کارخانه :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.factoryName}
                            </h4>
                        </div>
                    </div>
                    <div className='col-6 float-start'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                نوع کاشی  :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.tileType}
                            </h4>
                        </div>                  
                    </div>
                </div>

                <hr/>
                
                <div>
                    <div className='col-6 float-end'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                قیمت کاشی :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.tilePrice}
                            </h4>
                        </div>
                    </div>
                    <div className='col-6 float-start'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                متر مربع  :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.squareMeters}
                            </h4>
                        </div>                  
                    </div>
                </div>

                <hr/>

                <div>
                    <div className='col-4 float-start'>
                        <div>
                            <h4 className='float-start col-12' dir="rtl">
                                تاریخ سفارش :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.orderDate}
                            </h4>
                        </div>
                    </div>
                    <div className='col-4 float-end'>
                        <div>
                            <h4 className='col-12' dir="rtl">
                                 شماره تلفن  :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.phoneNumber}
                            </h4>
                        </div>                                        
                    </div>
                    <div className='col-4 float-end'>
                        <div>
                            <h4 className='col-12' dir="rtl">
                                تاریخ تحویل  :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.deliveryDate}
                            </h4>
                        </div>                      
                    </div>
                    
                </div>

                <hr/>

                <div>
                    <div>
                        <div>
                            <h4 className='col-12' dir="rtl">
                                 آدرس :
                            </h4>
                        </div>
                        <div>
                            <h4 dir="rtl">
                                {props.address}
                            </h4>
                        </div>
                    </div>
                    
                </div>
   
            </div>
    )
}

export default PCard
