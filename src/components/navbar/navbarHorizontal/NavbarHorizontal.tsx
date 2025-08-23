'use client'

import Link from "next/link";
import type {MenuLink} from "@/types/types";
import {usePathname} from "next/navigation";
import HamburgerButton from "@/components/navbar/navbarHorizontal/HamburgerButton";
import Logos from "@/components/navbar/navbarHorizontal/Logos";
import AuthButtons from "@/components/navbar/navbarHorizontal/AuthButtons";
import Submenu from "@/components/navbar/navbarHorizontal/Submenu";

export default function NavbarHorizontal({menuLinks, toggleVerticalNavbarAction}: {
    menuLinks: MenuLink[],
    toggleVerticalNavbarAction: (param: boolean) => void
}) {
    const path = usePathname();

    return (
        <div className="navbar bg-neutral text-neutral-content border-b-primary border-b-3 h-25 p-0 w-full">
            <HamburgerButton toggleVerticalNavbarAction={toggleVerticalNavbarAction}/>
            <Logos/>
            <div className="navbar-center h-full">
                <ul className="lg:flex h-full hidden">
                    {menuLinks.map((link, index) => (
                        <li className={`group w-30 xl:w-45 text-center xl:text-lg transition relative ${path === link.href ? "bg-primary font-bold" : ""}`}
                            key={index}>
                            {!link.submenu ? <Link className="h-full flex items-center justify-center z-10 relative"
                                                   href={link.href}>{link.text}</Link> : (<>
                                <button className="h-full w-full z-10 relative cursor-pointer">
                                    {link.text}
                                </button>
                                <Submenu link={link}/>
                            </>)}
                            <span
                                className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 group-hover:h-full"></span>
                        </li>))}
                </ul>
            </div>
            <div className="navbar-end">
                <AuthButtons/>
            </div>
        </div>
    );
}