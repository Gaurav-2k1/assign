import React from 'react'
import { Col } from 'react-bootstrap'
import im from "../assets/product.png"
import HeroComponentRight from './HeroComponentRight'
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
            <div style={{ backgroundColor: "#22333B", overflow: "scroll" }} className='py-md-2 gap-md-2 gap-4 px-2 px-md-5 d-flex flex-row fulldiv align-items-center'>
                {tabs.map((d, i) => {
                    return (
                        <Col className='d-flex justify-content-center wfit' key={i} style={{ color: 'white' }}>{d}</Col>
                    )
                })}
            </div>
            <div className='container d-flex flex-column flex-md-row mt-md-5 py-5'>
                <div
                    
                    className='d-flex flex-column px-10 gap-4'>
                    <img

                        src={im}
                        alt=''
                        className='w-md-70 w-100'
                    />
                    <p style={{ fontSize: "18px" }}>Also See:</p>
                    <div  className='d-flex flex-row  justify-content-between  overflow-auto
                    gap-2
                    '>
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                        <ProductCard url={im} />
                    </div>
                </div>
                <div className='container d-flex flex-column'>
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