'use client';

import { useState } from 'react';
import NavbarHorizontal from '@/components/navbar/navbarHorizontal/NavbarHorizontal';
import NavbarVertical from '@/components/navbar/navbarVertical/NavbarVertical';
import { getMenuLinks } from '@/components/navbar/MenuLinks';
import { useLocale } from 'gt-next';

export default function Navbar() {
  const [isVerticalNavbarOpen, setIsVerticalNavbarOpen] =
    useState<boolean>(false);
  const locale = useLocale();
  const menuLinks = getMenuLinks(locale);

  return (
    <nav>
      <NavbarHorizontal
        menuLinks={menuLinks}
        toggleVerticalNavbarAction={setIsVerticalNavbarOpen}
      />
      <NavbarVertical
        menuLinks={menuLinks}
        isOpen={isVerticalNavbarOpen}
        toggleVerticalNavbarAction={setIsVerticalNavbarOpen}
      />
    </nav>
  );
}
