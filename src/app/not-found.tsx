import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center px-6"
      style={{ minHeight: 'calc(100vh - 7rem)' }}
    >
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Nie mogliśmy znaleźć strony, której szukasz
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Strona mogła zostać usunięta lub nigdy nie istniała.
      </p>
      <Link href="/" className="text-xl px-6 py-3 btn btn-neutral btn-outline">
        Wróć na stronę główną
      </Link>
    </div>
  );
}
