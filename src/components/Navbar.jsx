import React from 'react'
import c from "../assets/catalogie.png"
import logo from "../assets/logo.png"
import ca from "../assets/cart.png"
import w from "../assets/heart.png"
import a from "../assets/account.png"
const Navbarcom = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> <img
                    src={logo}
                    alt=''
                    style={{ height: 40 }}
                /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 wfit">
                        <li className="nav-item">
                            <a className="nav-link wfit active" aria-current="page" href="/">Brand</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wfit" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link wfit" href="/">Get Quotes</a>
                        </li>
                        <form class="d-flex container-fluid" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>

                    <div className='d-flex flex-row align-items-center  gap-4 justify-content-center'>
                        <div className='d-flex pointer-cursor flex-column align-items-center '>
                            <img style={{ width: 20, height: 20 }} src={c} alt='' />
                            <p>catalogie</p>
                        </div>
                        <div className='d-flex pointer-cursor flex-column align-items-center'>
                            <img style={{ width: 20, height: 20 }} src={ca} alt='' />
                            <p>cart</p>
                        </div><div className='d-flex pointer-cursor flex-column align-items-center'>
                            <img style={{ width: 20, height: 20 }} src={w} alt='' />
                            <p>wishlist</p>
                        </div>
                        <div className='d-flex pointer-cursor flex-column align-items-center'>
                            <img style={{ width: 20, height: 20 }} src={a} alt='' />
                            <p>Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbarcom