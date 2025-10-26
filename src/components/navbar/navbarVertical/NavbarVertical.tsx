'use client';

import Link from 'next/link';
import type { MenuLink } from '@/types/types';
import { AnimatePresence, motion } from 'motion/react';
import SubmenuVertical from '@/components/navbar/navbarVertical/SubmenuVertical';
import AuthButtonsVertical from '@/components/navbar/navbarVertical/AuthButtonsVertical';
import { useCallback } from 'react';

export default function NavbarVertical({
  menuLinks,
  isOpen,
  toggleVerticalNavbarAction
}: {
  menuLinks: MenuLink[];
  isOpen: boolean;
  toggleVerticalNavbarAction: (param: boolean) => void;
}) {
  const onLinkClick = useCallback(() => {
    toggleVerticalNavbarAction(false);
  }, [toggleVerticalNavbarAction]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => toggleVerticalNavbarAction(false)}
          />
          <motion.ul
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{ duration: 0.25, type: 'tween' }}
            className="overflow-auto fixed left-0 top-0 z-50 menu h-full w-80 p-4 bg-neutral text-neutral-content flex-nowrap"
          >
            {menuLinks.map((link) => (
              <li key={link.href} className="m-1 transition-all">
                {!link.submenu ? (
                  <Link
                    onClick={onLinkClick}
                    className="hover:bg-primary text-lg"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <div className="menu-vertical block hover:bg-neutral">
                    <p className="text-lg m-1 cursor-auto">{link.text}</p>
                    <SubmenuVertical link={link} onLinkClick={onLinkClick} />
                  </div>
                )}
              </li>
            ))}
            <AuthButtonsVertical onLinkClick={onLinkClick} />
          </motion.ul>
        </>
      )}
    </AnimatePresence>
  );
}
