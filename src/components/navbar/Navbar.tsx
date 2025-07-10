'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logo.svg";
import { usePathname } from "next/navigation";
import React from "react";

type Link = {
    text: string;
    href: string;
    submenu?: Link[];
}

const menuLinks: Link[] = [
    { text: "Strona główna", href: "/", },
    { text: "Aktualności", href: "/aktualnosci", },
    { text: "Informacje", href: "/regulamin", submenu: [
            { text: "Regulamin", href: "", },
            { text: "Klasy startowe", href: "", },
            { text: "Harmonogram wystawy", href: "", },
        ] }, // Dropdown: Regulamin, Klasy startowe, Harmonogram wystawy
    { text: "Konkurs GT-Cup", href: "/harmonogram", submenu: [
            { text: "Rejestracja", href: "", },
            {text: "Regulamin", href: "", },
            { text: "Wystawy", href: "", },
            { text: "Relacje", href: "", },
        ] }, // Dropdown: Rejestracja, Regulamin, Wystawy, Relacje
];

export default function Navbar() {
    const path = usePathname();
    return (
        <nav>
            <style jsx>{`
                .menu {
                    --menu-active-bg: var(--color-neutral);
                }
                .menu :where(li ul)::before {
                    background-color: var(--color-neutral-content);
                    opacity: 1;
                }
            `}</style>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-neutral text-neutral-content border-b-primary border-b-3 h-25 p-0 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost m-5">
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
                            </label>
                        </div>
                        <div className="navbar-start">
                            <Image src={logo} alt="logo" width={logo.width} height={logo.height}
                                   className="w-50 m-5"/>
                        </div>
                        <div className="navbar-center h-full">
                            <ul className="lg:flex h-full hidden">
                                {menuLinks.map((link, index) => (<li className={`w-30 xl:w-45 text-center pl-5 pr-5 xl:text-lg transition relative group overflow-hidden ${path === link.href ? "bg-primary font-bold" : ""}`} key={index}>
                                    {!link.submenu ? <Link className="h-full flex items-center justify-center z-10 relative" href={link.href}>{link.text}</Link> : (<>
                                        <button className="h-full z-10 relative cursor-pointer" popoverTarget={`popover-${index}`} style={{ anchorName: `--anchor-${index}` } as React.CSSProperties }>
                                            {link.text}
                                        </button>

                                        <ul className="dropdown dropdown-center w-30 xl:w-45 bg-primary text-primary-content"
                                            popover="auto" id={`popover-${index}`} style={{ positionAnchor: `--anchor-${index}` } as React.CSSProperties }>
                                            {link.submenu?.map((sublink, subindex) => (
                                                <li key={subindex} className="m-5">
                                                    <Link className="hover:font-bold transition-all wrap-break-word" href={sublink.href}>{sublink.text}</Link>
                                                    <div className="divider divider-accent"></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </>)}
                                    <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 group-hover:h-full"></span>
                                </li>))}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <Link className="hidden lg:btn btn-outline m-3" href="">Zaloguj się</Link>
                            <Link className="hidden lg:btn m-3 mr-10" href="">Rejestracja</Link>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full w-80 p-4 bg-neutral text-neutral-content">
                        {menuLinks.map((link, index) => (<li key={index} className="m-1 transition-all">
                            {!link.submenu ? <Link className="hover:bg-primary text-lg" href={link.href}>{link.text}</Link> : (
                                <div className="menu-vertical block hover:bg-neutral">
                                    <div className="text-lg m-1">{link.text}</div>
                                    <ul className="text-sm">
                                        {link.submenu?.map((sublink, subindex) => (
                                            <li key={subindex}><Link className="m-1 hover:bg-primary text-sm" href={sublink.href}>{sublink.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>))}
                        <div className="divider"></div>
                        <li>
                            <Link className="m-1 btn btn-outline" href="">Zaloguj się</Link>
                        </li>
                        <li>
                            <Link className="m-1 btn" href="">Rejestracja</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}