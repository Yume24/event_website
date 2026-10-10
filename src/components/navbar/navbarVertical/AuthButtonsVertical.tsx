'use client';

import Link from 'next/link';
import { useLocale } from 'gt-next';

export default function AuthButtonsVertical({
  onLinkClick
}: {
  onLinkClick: () => void;
}) {
  const locale = useLocale();

  return (
    <li>
      <Link
        onClick={onLinkClick}
        className="ml-auto mr-auto m-1 w-60 btn"
        href="/rejestracja"
      >
        {locale === 'en' ? 'Registration' : 'Rejestracja'}
      </Link>
    </li>
  );
}
