import Link from 'next/link';

export default function AuthButtonsVertical({
  onLinkClick
}: {
  onLinkClick: () => void;
}) {
  return (
    <li>
      <Link
        onClick={onLinkClick}
        className="ml-auto mr-auto m-1 w-60 btn"
        href="/rejestracja"
      >
        Rejestracja
      </Link>
    </li>
  );
}
