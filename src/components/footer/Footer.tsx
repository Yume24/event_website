import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-6">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
          aria-hidden
        >
          <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.59-.75a.75.75 0 0 0-.59.29.75.75 0 0 0 .14 1.05l7.21 5.41a1.75 1.75 0 0 0 2.28 0l7.21-5.41a.75.75 0 0 0 .14-1.05.75.75 0 0 0-.59-.29H4.09Z" />
        </svg>
        <a
          href="mailto:gm.scalemasters@gmail.com"
          className="link link-hover font-medium"
          aria-label="Napisz do nas na adres e-mail gm.scalemasters@gmail.com"
        >
          gm.scalemasters@gmail.com
        </a>
      </div>
      <p className="text-sm opacity-70">Scale Masters</p>
    </footer>
  );
}
