import Link from 'next/link';

export default function AuthButtons() {
  return (
    <Link className="hidden lg:btn m-3 mr-8" href="/rejestracja">
      Rejestracja
    </Link>
  );
}
