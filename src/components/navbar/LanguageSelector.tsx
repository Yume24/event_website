'use client';

import { useLocale, useSetLocale } from 'gt-next';

export default function LanguageSelector({
  className = ''
}: {
  className?: string;
}) {
  const locale = useLocale();
  const setLocale = useSetLocale();

  const handleSelect = (newLocale: string) => {
    setLocale(newLocale);
    if (typeof document !== 'undefined') {
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm text-neutral-content border border-neutral-content/20 hover:border-primary gap-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="uppercase font-semibold text-xs">{locale || 'pl'}</span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-50 menu p-2 shadow-lg bg-neutral text-neutral-content rounded-box w-32 border border-neutral-content/20 mt-1"
      >
        <li>
          <button
            type="button"
            className={`flex items-center justify-between ${locale === 'pl' ? 'active font-bold text-primary' : ''}`}
            onClick={() => handleSelect('pl')}
          >
            <span>Polski</span>
            <span className="text-xs opacity-70">PL</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`flex items-center justify-between ${locale === 'en' ? 'active font-bold text-primary' : ''}`}
            onClick={() => handleSelect('en')}
          >
            <span>English</span>
            <span className="text-xs opacity-70">EN</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
