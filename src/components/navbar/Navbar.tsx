'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/static/images/logo.svg";
import { usePathname } from "next/navigation";

type Link = {
    text: string;
    href: string;
}

const menuLinks: Link[] = [
    { text: "Strona główna", href: "" },
    { text: "Aktualności", href: "" },
    { text: "Regulamin", href: "" },
    { text: "Harmonogram", href: "" },
];

export default function Navbar() {
    const path = usePathname();

    return (
        <nav>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="navbar bg-neutral text-neutral-content border-b-primary border-b-3 h-25 p-0">
                        <div className="navbar-start">
                            <Image src={logo} alt="logo" width={logo.width} height={logo.height}
                                   className="w-50 m-5"/>
                        </div>
                        <div className="navbar-center h-full">
                            <ul className="lg:flex h-full hidden">
                                {menuLinks.map((link, index) => (<li className={`w-40 text-center pl-5 pr-5 text-lg transition relative group overflow-hidden ${path === link.href ? "bg-primary" : ""}`} key={index}>
                                    <Link className="h-full flex items-center justify-center z-10 relative" href={link.href}>{link.text}</Link>
                                    <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 group-hover:h-full z-0"></span>
                                </li>))}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <Link className="hidden xl:btn btn-outline m-3" href="">Zaloguj się</Link>
                            <Link className="hidden xl:btn m-3 mr-10" href="">Rejestracja</Link>
                            <label htmlFor="my-drawer-4" className="xl:hidden drawer-button btn btn-outline m-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </label>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {menuLinks.map((link, index) => (<li key={index} className="lg:hidden">
                            <label htmlFor="my-drawer-4" className="w-full">
                                <Link href={link.href}>{link.text}</Link>
                            </label>
                        </li>))}
                        <div className="divider"></div>
                        <li>
                            <Link className="m-1 btn btn-neutral" href="">Zaloguj się</Link>
                        </li>
                        <li>
                            <Link className="m-1 btn btn-outline" href="">Rejestracja</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}