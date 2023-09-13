import React, { useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io"
import { BsTelephoneFill } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsCheck2 } from "react-icons/bs"
import { BsCheckCircle } from "react-icons/bs"
import { LuBadgePercent } from "react-icons/lu"
import assured from "../assets/right/assured.png"
import returns from "../assets/right/return.png"
import safe from "../assets/right/safe.png"

const HeroComponentRight = () => {
    const [value, setValue] = useState(0);

    const incrementValue = () => {
        setValue(value + 1);
    };

    const decrementValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <div className='d-flex flex-column px-md-8'>
            <div className='d-md-flex flex-column d-none'>
                <h2>Dorna Premium Leatherette Rolled arm Sofa, 74.01” </h2>

                <div className='d-flex flex-md-row flex-column mt-2 justify-content-between align-items-center'>
                    <div className='d-flex gap-2 '>
                        <p style={{ backgroundColor: "#EAE0D5", color: "#001C30" }} className='px-4 py-2 rounded hovere'>Brand Name</p>
                        <p style={{ backgroundColor: "#EAE0D5", color: "#001C30" }} className='px-4 py-2 rounded hovere'>Brand Name</p>
                    </div>
                    <div className='d-flex gap-3 '>
                        <p>Share it:</p>
                        <IoLogoWhatsapp style={{ color: "green" }} size={25} />
                        <BsFacebook style={{ color: "blue" }} size={25} />                </div>

                </div>
            </div>

            <hr />
            <div className='d-flex flex-column '>
                <div className='d-flex flex-column'>
                    <p className='gap-1'>
                        MRP : ₹ <span style={{ textDecoration: 'line-through' }}>17,999 </span> <span className='text-success'>(11% OFF)</span>
                    </p>
                    <p style={{ color: '#cd1818', fontSize: '31px', fontWeight: '600' }}>
                        ₹ 11,999 <span style={{ fontSize: '15px', fontWeight: '400px' }}>/piece</span>
                    </p>
                    <div className='d-flex flex-row gap-2'>
                        <div className="btn-group wfit d-flex align-items-center">
                            <div className="btn btn-secondary" onClick={decrementValue}>-</div>
                            <div className=' btn btn-white'>{value}</div>
                            <div className="btn btn-secondary" onClick={incrementValue}>+</div>
                        </div>
                        <p style={{ fontSize: '18px', color: 'white', backgroundColor: '#22333B' }} className='px-4 py-2 rounded  hovere'>

                            ADD TO CART</p>
                    </div>
                    <p style={{ fontSize: '18px', backgroundColor: 'white', color: '#22333B' }} className='px-4 py-2 rounded pointer-cursor border hovere border-secondary-subtle d-flex align-items-center justify-content-center gap-2'>
                        <IoLogoWhatsapp style={{ color: "green" }} size={25} />
                        Buy On WhatsApp</p>
                    <p style={{ color: "#10A728" }}><BsCheck2 size={25} />Add products worth ₹5000 to place an order.</p>
                    <p style={{ color: "#10A728" }}><BsCheck2 size={25} />To place an order, add at least 10 units to your cart.</p>

                    <div className='d-flex mt-4 flex-column'>
                        <p className='gap-1 d-flex align-items-center ' style={{ color: "#001c30" }}><BsCheckCircle size={18} />Length : <span className='fw-semibold'>8 feet</span></p>
                        <p className='gap-1 d-flex align-items-center' style={{ color: "#001c30" }}><BsCheckCircle size={18} />Breadth :<span className='fw-semibold'>4 feet</span> </p>
                        <p className='gap-1 d-flex align-items-center' style={{ color: "#001c30" }}><BsCheckCircle size={18} />Sheet Available :<span className='fw-semibold'>144</span> </p>

                    </div>

                    <span style={{ color: "#001c30", fontSize: '18px' }} className='fw-semibold'>BEST PRICE <LuBadgePercent size={18} /></span>
                    <div className='d-flex flex-column mt-3'>
                        <span style={{ color: "#001c30", fontSize: '18px' }} className='fw-semibold'>Save ₹238  </span>
                        <p style={{ color: "#001c30", fontSize: '16px' }}>On orders over ₹2500 today with coupon code <span style={{ color: '#1FAF38', fontWeight: '600' }}>"FRIKLY”</span></p>
                    </div>
                    <div className='d-flex flex-column mt-3'>
                        <span style={{ color: "#001c30", fontSize: '18px' }} className='fw-semibold'>Save ₹238  </span>
                        <p style={{ color: "#001c30", fontSize: '16px' }}>On orders over ₹5000 today with coupon code <span style={{ color: '#1FAF38', fontWeight: '600' }}>"FRIKLY”</span></p>
                    </div>
                    <form class="d-flex container-fluid" role="search">
                        <input class="form-control " type="search" placeholder="Enter Pincode" aria-label="Search" />
                        <button class="px-3 bg" type="submit">Check</button>
                    </form>
                    <div style={{ width: '90%' }} className='d-flex flex-row align-items-center   gap-5 mt-5'>
                        <div className='d-flex pointer-cursor flex-column gap-3 align-items-center'>
                            <img style={{ width: 50, height: 50 }} src={assured} alt='' />
                            <p className='w-md-50 w-100 text-center'>Assured Transparency</p>
                        </div>
                        <div className='d-flex pointer-cursor flex-column gap-3 align-items-center'>
                            <img style={{ width: 50, height: 50 }} src={safe} alt='' />
                            <p className='w-md-50 w-100 text-center '>Fast And Safe
                                Delivery</p>
                        </div><div className='d-flex pointer-cursor  flex-column gap-3 align-items-center'>
                            <img style={{ width: 50, height: 50 }} src={returns} alt='' />
                            <p className='w-md-50 w-100 text-center'>Easy returns & replacements</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row align-items-center gap-2  gap-md-5 mt-3'>
                        <div className='tc border border-secondary-subtle px-md-4 px-2 py-2 hovere rounded-pill fs-md-5 fs-6'>Desciption</div>
                        <div className='tc border border-secondary-subtle px-md-4 px-2 py-2 hovere rounded-pill fs-md-5 fs-6'>Shipping T&C</div>
                        <div className='tc border border-secondary-subtle px-md-4 px-2 py-2 hovere rounded-pill fs-md-5 fs-6'>Payment T&C</div>
                    </div>
                    <hr className='my-3' />
                    <ul className='lideco'>
                        <li>Payment Methods: We accept both COD and UPI payment options.</li>
                        <li>In case of COD, 25% of the amount has to be paid in advance via UPI or Bank Transfers. The remaining 75% could be paid on delivery. We also provide a 2% discount to customers who pay in full in advance through UPI. </li>
                        <li>Taxes: Please note that the amount mentioned is inclusive of all taxes. Delivery charges will be applicable on certain items. </li>
                        <li>Payment Confirmation: We’d ask you to send a screenshot of the UPI payment via WhatsApp to confirm your payment. </li>
                        <li>Your payment information is secure with us. We use industry standard encryption and comply with all related regulations. </li>
                        <li>Order Cancellation: Cancellation of your order on grounds of damaged products/less quantity received is accepted. We do not accept order cancellation in case of quality issues, as we only deal with top-quality products.</li>
                    </ul>
                    <hr />
                    <p className='tc fs-5'>
                        Have a Question ? <span className='fs-6'>We're here to help.</span>
                    </p>
                    <div className='d-flex flex-row gap-2'>
                        <p style={{ fontSize: '18px', color: 'white', backgroundColor: '#22333B' }} className='btnco gap-2 hovere'><IoLogoWhatsapp style={{ color: "#1FAF38" }} size={25} />WhatsApp</p>
                        <p style={{ fontSize: '18px', backgroundColor: 'white', border: "1.17px solid #001C30" }} className='btnco gap-2 hovere'><BsTelephoneFill className='tc' size={25} />8035388980</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroComponentRight