'use client';

import Link from 'next/link';
import { useLocale } from 'gt-next';

export default function AuthButtons() {
  const locale = useLocale();

  return (
    <Link className="hidden lg:btn m-3 mr-4" href="/rejestracja">
      {locale === 'en' ? 'Registration' : 'Rejestracja'}
    </Link>
  );
}
