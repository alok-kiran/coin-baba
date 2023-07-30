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
        <>
        <div className="h-12 w-full border-b-[1px]">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-48 xl:px-16">
                    <ul className="flex flex-row text-xs">
                        <li>
                            Cryptos: 1.8M+
                        </li>
                        <li className="ml-4">
                            Exchanges: 651
                        </li>
                        <li className="ml-4">
                            Market Cap: $1.19T
                        </li>
                        <li className="ml-4">
                            24h Vol: $18.35B
                        </li>
                        <li className="ml-4">
                            Dominance: 48.0% ETH: 19.1%
                        </li>
                        <li className="ml-4">
                            ETH Gas: 20 Gwei
                        </li>
                        <li className="ml-4">
                            Fear & Greed: 52/100
                        </li>
                    </ul>
                    <div className="flex flex-row invisible lg:visible">
                        <button>English</button>
                        <button className="rounded-none ml-4 outline-1">USD</button>
                        <div className="ml-4">|</div>
                        <button className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">Login</button>
                        <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Sign Up</button>
                    </div>
            </div>
        </div>
        <nav className="fixed w-full h-24 shadow-sm bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-48 xl:px-16">
                <div className="flex flex-row">
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
                        <div className="hidden sm:flex flex justify-between items-center">
                            <ul className="hidden sm:flex">
                                <Link href={"/about"}>
                                    <li className="ml-10">Cryptocurrencies</li>
                                </Link>
                                <Link href={"/contact"}>
                                    <li className="ml-10">Exchanges</li>
                                </Link>
                                <Link href={"/blog"}>
                                    <li className="ml-10">Community</li>
                                </Link>
                                <Link href={"/services"}>
                                    <li className="ml-10">Products</li>
                                </Link>
                                <Link href={"/services"}>
                                    <li className="ml-10">Learn</li>
                                </Link>
                            </ul>
                        </div>
                </div>
                <div className="md:hidden cursor-pointer pl-24" onClick={handleNav}>
                    <AiOutlineMenu size={36}/>
                </div>
                <div>
                <div className="hidden sm:flex flex justify-between items-center">
                            <ul className="hidden flex sm:flex justify-between items-center">
                                <Link href={"/services"}>
                                    <li className="ml-4">Watchlist</li>
                                </Link>
                                <Link href={"/services"}>
                                    <li className="ml-4">Portfolio</li>
                                </Link>
                                <div>
                                    <li className="ml-4">
                                    <label className="relative block">
                                        <input className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                                    </label>
                                    </li>
                                </div>
                            </ul>
                        </div>
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
        </>
    )
}

export default NavBar;