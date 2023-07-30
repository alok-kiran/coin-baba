import Image from "next/image";
import React, { useState } from "react";
import Logo from '../public/logo-white.png'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);   
    }
    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div>
                    <Link href={'/'}>
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={75}
                            height={100}
                            className="cursor-pointer"
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href={"/about"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Why us</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Contact us</li>
                        </Link>
                        <Link href={"/blog"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Blog</li>
                        </Link>
                        <Link href={"/services"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Our services</li>
                        </Link>             
                    </ul>
                </div>
                <div className="md:hidden cursor-pointer pl-24" onClick={handleNav}>
                    <AiOutlineMenu size={36}/>
                </div>
            </div>
            <div className={
                menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={34}/>
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href={"/"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cusrsor-pointer">
                                Home
                            </li>
                        </Link>
                        <Link href={"/about"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cusrsor-pointer bg-success">
                                About
                            </li>
                        </Link>
                        <Link href={"/contact"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cusrsor-pointer">
                                Contact us
                            </li>
                        </Link>
                        <Link href={"/service"}>
                            <li onClick={()=> setMenuOpen(false)} className="py-4 cusrsor-pointer">
                                Services
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={34}/>
                    <AiOutlineFacebook size={34}/>
                    <AiOutlineTwitter size={34}/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;