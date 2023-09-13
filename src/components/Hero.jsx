import React from 'react'
import { Col } from 'react-bootstrap'
import im from "../assets/product.png"
import HeroComponentRight from './HeroComponentRight'
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFacebook } from "react-icons/bs"
const tabs = [
    "Hardware",
    "Sanitary & Bath",
    "Home Appliances",
    "Laminates & Mica",
    "Louvers & Planks",
    "Veneer",
    "Luxe Home Decor",
    "Jaipur Rugs"
]
const Hero = () => {
    return (
        <div className='fulldiv '>
            <div style={{ backgroundColor: "#22333B" }} className='py-md-2 gap-md-2 gap-4 px-2 px-md-5 d-md-flex flex-row fulldiv align-items-center d-none'>
                {tabs.map((d, i) => {
                    return (
                        <Col className='d-flex justify-content-center wfit' key={i} style={{ color: 'white' }}>{d}</Col>
                    )
                })}
            </div>
            <div className='container d-flex flex-column flex-md-row mt-md-5 py-5 px-10 '>
                <div

                    className='d-flex flex-column gap-4 main'>
                    <div className='d-flex d-md-none flex-column'><h2>Dorna Premium Leatherette Rolled arm Sofa, 74.01” 📌</h2>

                        <div className='d-flex flex-row  align-items-center justify-content-between'>
                            <div className='d-flex gap-2 '>
                                <p style={{ backgroundColor: "#EAE0D5", color: "#001C30", fontSize: '10px' }} className='px-3 py-2 rounded wfit '>Brand Name</p>
                                <p style={{ backgroundColor: "#EAE0D5", color: "#001C30", fontSize: '10px' }} className='px-3 py-2 rounded w-fit'>Brand Name</p>
                            </div>
                            <div className='d-flex gap-3 '>
                                <p>Share it:</p>
                                <IoLogoWhatsapp style={{ color: "green" }} size={25} />
                                <BsFacebook style={{ color: "blue" }} size={25} />                </div>

                        </div>
                    </div>
                    <div className='d-none flex-row d-md-flex gap-2 ubar'>
                        <span>Home</span>
                        <span>{`>`}</span>
                        <span>Home Appliances</span>
                        <span>{`>`}</span>

                        <span>Air Conditioner </span>
                        <span>{`>`}</span>

                        <span style={{ color: "#001C30" }}>Samsung AC </span>
                    </div>

                    <img

                        src={im}
                        alt=''
                        style={{ width: "80%" }}
                    />
                    <p style={{ fontSize: "18px" }}>Also See:</p>
                    <div className='d-flex flex-row  justify-content-between  overflow-auto
                    gap-2
                    '>
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <HeroComponentRight />
                </div>
            </div>
        </div>


    )
}


const ProductCard = ({ url }) => {
    return (
        <div className='d-flex flex-column p-2 gap-2 align-items-center border border-secondary-subtle
        rounded'>
            <img src={url} alt='' style={{ width: '100px', objectFit: 'cover' }} />
            <p className='mx-2'>SK2 Nesta Glossy Crystal Acrylic 1.5 Mm</p>
        </div>
    )
}
export default Hero