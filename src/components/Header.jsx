import React from 'react'
import Logo from "../assets/images/chill-app-icon.png"
import Avatar from "../assets/images/avatar.png"
import ArrowDown from "../assets/images/KeyboardArrowDown.png"

export default function Header() {
    // const homeStyle = {
    //     background: #111111,
    //     color: #fff
    // };

  return (
    <>
        <header>
            <nav className="navbar" style={{ background: '#111', color: '#fff' }}>
                <div className="navbar-menu">
                    <div className="logo"><img src={Logo} alt='chill-logo'/></div>
                    <ul className="nav-links">
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Daftar Saya</a></li>
                    </ul>
                </div>
                <div className="profile">
                    <img className="profile-avatar" src={Avatar} alt='avatar'/>
                    <img src={ArrowDown} alt="arrow-down"/>
                </div>
            </nav>
        </header>
    </>
  )
}
