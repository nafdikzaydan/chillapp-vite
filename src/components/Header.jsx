import React from 'react'
import Logo from "../assets/images/chill-app-icon.png"
import Avatar from "../assets/images/avatar.png"
import ArrowDown from "../assets/images/KeyboardArrowDown.png"

export default function Header() {
    
  return (
    <>
        <header>
        <nav className="bg-black/90 text-white px-4 md:px-20 py-6 flex justify-between items-center w-full fixed top-0 left-0 z-50 backdrop-blur-xl">
            
            <div className="flex items-center gap-20">
                <div className="h-8 md:h-10 flex items-center">
                    <img src={Logo} alt="chill-logo" className="h-6 w-auto object-contain" />
                </div>
                
                <ul className="hidden md:flex items-center gap-20 text-base font-normal text-white">
                    <li>
                    <a href="#" className="hover:text-white transition-colors">Series</a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-white transition-colors">Film</a>
                    </li>
                    <li>
                    <a href="#" className="hover:text-white transition-colors">Daftar Saya</a>
                    </li>
                </ul>
            </div>
            
            <div className="flex items-center gap-2 cursor-pointer">
            <img 
                className="w-12 h-12 rounded-full object-cover border border-zinc-700" 
                src={Avatar} 
                alt="avatar"
            />
            <img 
                src={ArrowDown} 
                alt="arrow-down" 
                className="w-8 h-8 group-hover:translate-y-0.5 transition-transform"
            />
            </div>
        </nav>
        </header>
    </>
  )
}
