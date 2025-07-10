'use client'

import {useState} from "react";
import NavbarHorizontal from "@/components/navbar/NavbarHorizontal";
import NavbarVertical from "@/components/navbar/NavbarVertical";
import {menuLinks} from "@/components/navbar/MenuLinks";

export default function Navbar() {
    const [isVerticalNavbarOpen, setIsVerticalNavbarOpen] = useState<boolean>(false);

    return (
        <nav>
            <NavbarHorizontal menuLinks={menuLinks} toggleVerticalNavbarAction={setIsVerticalNavbarOpen}/>
            <NavbarVertical menuLinks={menuLinks} isOpen={isVerticalNavbarOpen}
                            toggleVerticalNavbarAction={setIsVerticalNavbarOpen}/>
        </nav>
    );
}