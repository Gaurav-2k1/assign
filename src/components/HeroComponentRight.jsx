import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFacebook } from "react-icons/bs"
import { BsCheck2 } from "react-icons/bs"
import { BsCheckCircle } from "react-icons/bs"
import { LuBadgePercent } from "react-icons/lu"
const HeroComponentRight = () => {
    return (
        <div className='d-flex flex-column px-8'>
            <h2>Dorna Premium Leatherette Rolled arm Sofa, 74.01” </h2>

            <div className='d-flex flex-md-row flex-column mt-2 justify-content-between align-items-center'>
                <div className='d-flex gap-2 '>
                    <p style={{ backgroundColor: "#EAE0D5", color: "#001C30" }} className='px-4 py-2 rounded'>Brand Name</p>
                    <p style={{ backgroundColor: "#EAE0D5", color: "#001C30" }} className='px-4 py-2 rounded'>Brand Name</p>
                </div>
                <div className='d-flex gap-3 '>
                    <p>Share it:</p>
                    <IoLogoWhatsapp style={{ color: "green" }} size={25} />
                    <BsFacebook style={{ color: "blue" }} size={25} />                </div>

            </div>
            <hr />
            <div className='d-flex container flex-column'>
                <div  className='d-flex flex-column w-md-70 w-100'>
                    <p className='gap-1'>
                        MRP : ₹ <span style={{ textDecoration: 'line-through' }}>17,999 </span> <span className='text-success'>(11% OFF)</span>
                    </p>
                    <p style={{ color: '#cd1818', fontSize: '31px', fontWeight: '600' }}>
                        ₹ 11,999 <span style={{ fontSize: '15px', fontWeight: '400px' }}>/piece</span>
                    </p>
                    <div className='d-flex flex-row'>
                        <p style={{ fontSize: '18px', color: 'white', backgroundColor: '#22333B' }} className='px-4 py-2 rounded pointer-cursor '>ADD TO CART</p>
                    </div>
                    <p style={{ fontSize: '18px', backgroundColor: 'white', color: '#22333B' }} className='px-4 py-2 rounded pointer-cursor border border-secondary-subtle d-flex align-items-center justify-content-center gap-2'>
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
                        <p style={{ color: "#001c30", fontSize: '16px' }}>On orders over ₹2500 today with coupon code <span style={{color:'#1FAF38',fontWeight:'600'}}>"FRIKLY”</span></p>
                    </div>
                    <div className='d-flex flex-column mt-3'>
                        <span style={{ color: "#001c30", fontSize: '18px' }} className='fw-semibold'>Save ₹238  </span>
                        <p style={{ color: "#001c30", fontSize: '16px' }}>On orders over ₹5000 today with coupon code <span style={{color:'#1FAF38',fontWeight:'600'}}>"FRIKLY”</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroComponentRight