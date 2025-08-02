'use client'

import Link from "next/link";
import type {MenuLink} from "@/components/navbar/MenuLinks";
import {AnimatePresence, motion} from "motion/react";

export default function NavbarVertical({menuLinks, isOpen, toggleVerticalNavbarAction}: {
    menuLinks: MenuLink[],
    isOpen: boolean,
    toggleVerticalNavbarAction: (param: boolean) => void
}) {
    const onLinkClick = () => {
        toggleVerticalNavbarAction(false);
    }

    return (
        <AnimatePresence>
            {isOpen && (<>
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => toggleVerticalNavbarAction(false)}
                />
                <motion.ul initial={{x: -500}} animate={{x: 0}} exit={{x: -500}}
                           transition={{duration: 0.25, type: "tween"}}
                           className="overflow-auto fixed left-0 top-0 z-50 menu h-full w-80 p-4 bg-neutral text-neutral-content flex-nowrap">
                    {menuLinks.map((link, index) => (<li key={index} className="m-1 transition-all">
                        {!link.submenu ? <Link onClick={onLinkClick} className="hover:bg-primary text-lg"
                                               href={link.href}>{link.text}</Link> : (
                            <div className="menu-vertical block hover:bg-neutral">
                                <p className="text-lg m-1 cursor-auto">{link.text}</p>
                                <ul className="text-sm">
                                    {link.submenu?.map((sublink, subindex) => (
                                        <li key={subindex}><Link onClick={onLinkClick}
                                                                 className="m-1 hover:bg-primary text-sm"
                                                                 href={link.href + sublink.href}>{sublink.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>))}
                    <li>
                        <Link onClick={onLinkClick} className="ml-auto mr-auto m-1 btn w-60 btn-outline" href="">Zaloguj
                            się</Link>
                    </li>
                    <li>
                        <Link onClick={onLinkClick} className="ml-auto mr-auto m-1 w-60 btn" href="">Rejestracja</Link>
                    </li>
                </motion.ul>
            </>)}
        </AnimatePresence>
    );
}