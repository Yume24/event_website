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

      <div className="flex items-center gap-3">
        <a
          href="https://www.youtube.com/@grupamodelarskascalemasters"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="YouTube — Scale Masters"
          title="YouTube — Scale Masters"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
            aria-hidden
          >
            <path d="M23.498 6.186a3.002 3.002 0 00-2.116-2.123C19.612 3.5 12 3.5 12 3.5s-7.612 0-9.382.563A3.002 3.002 0 00.502 6.186 31.35 31.35 0 000 12a31.35 31.35 0 00.502 5.814 3.002 3.002 0 002.116 2.123C4.388 20.5 12 20.5 12 20.5s7.612 0 9.382-.563a3.002 3.002 0 002.116-2.123A31.35 31.35 0 0024 12a31.35 31.35 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/share/19g6sMLoXp"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
          aria-label="Facebook — Scale Masters"
          title="Facebook — Scale Masters"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
            aria-hidden
          >
            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.03H7.9v-2.9h2.4V9.41c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.59l-.41 2.9h-2.18v7.03c4.78-.73 8.44-4.9 8.44-9.93z" />
          </svg>
        </a>

        <span className="text-sm opacity-70">Scale Masters</span>
      </div>
    </footer>
  );
}
