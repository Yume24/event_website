'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logos/logo.svg";
import logoGT from "../../../public/static/images/logos/logoGT.png";
import type {MenuLink} from "@/components/navbar/MenuLinks";
import {usePathname} from "next/navigation";
import React, {useEffect, useRef} from "react";

export default function NavbarHorizontal({menuLinks, toggleVerticalNavbarAction}: {
    menuLinks: MenuLink[],
    toggleVerticalNavbarAction: (param: boolean) => void
}) {
    const path = usePathname();
    const popoverRefs = useRef<(HTMLUListElement | null)[]>([]);

    const handleMouseEnter = (index: number) => {
        popoverRefs.current[index]?.showPopover();
    };
    const handleMouseOut = (index: number) => {
        popoverRefs.current[index]?.hidePopover();
    };
    useEffect(() => {
        popoverRefs.current.forEach(pop => pop?.hidePopover());
    }, [path]);
    return (
        <div className="navbar bg-neutral text-neutral-content border-b-primary border-b-3 h-25 p-0 w-full">
            <div className="flex-none lg:hidden">
                <button className="btn btn-square btn-ghost m-5" onClick={() => toggleVerticalNavbarAction(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="navbar-start">
                <Image src={logo} alt="logo" width={logo.width} height={logo.height}
                       className="w-25 m-5"/>
                <Image src={logoGT} alt="logo GT" width={logoGT.width} height={logoGT.height}
                       className="w-25 m-5"/>
            </div>
            <div className="navbar-center h-full">
                <ul className="lg:flex h-full hidden">
                    {menuLinks.map((link, index) => (
                        <li className={`w-30 xl:w-45 text-center xl:text-lg transition relative group overflow-hidden ${path === link.href ? "bg-primary font-bold" : ""}`}
                            key={index}>
                            {!link.submenu ? <Link className="h-full flex items-center justify-center z-10 relative"
                                                   href={link.href}>{link.text}</Link> : (<>
                                <button className="h-full w-full z-10 relative cursor-pointer"
                                        popoverTarget={`popover-${index}`}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseOut={() => handleMouseOut(index)}
                                        style={{anchorName: `--anchor-${index}`} as React.CSSProperties}>
                                    {link.text}
                                </button>

                                <ul className="dropdown dropdown-center w-30 xl:w-45 bg-primary text-primary-content"
                                    popover="auto" id={`popover-${index}`}
                                    ref={el => {
                                        popoverRefs.current[index] = el
                                    }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseOut(index)}
                                    style={{positionAnchor: `--anchor-${index}`} as React.CSSProperties}>
                                    {link.submenu?.map((sublink, subindex) => (
                                        <li key={subindex}
                                            className="my-1 font-normal hover:bg-secondary transition-all">
                                            <Link
                                                className="p-3 w-full flex justify-center items-center wrap-break-word"
                                                href={link.href + sublink.href}>{sublink.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </>)}
                            <span
                                className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 group-hover:h-full"></span>
                        </li>))}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="hidden lg:btn btn-outline m-3" href="">Zaloguj się</Link>
                <Link className="hidden lg:btn m-3 mr-10" href="">Rejestracja</Link>
            </div>
        </div>
    );
}