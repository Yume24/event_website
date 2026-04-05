export default function Wyniki() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-6 md:px-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary border-b-2 border-primary pb-2 mb-8">
          Wyniki konkursu
        </h1>

        <div className="flex flex-col gap-6 mt-10">
          <a
            href="https://docs.google.com/spreadsheets/d/1kMoDDA9IPUbdmTR-PoQwKFyq8uq7sacT-cvWzyRVzSU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-outline btn-lg normal-case text-xl"
          >
            GT Cup Europe
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1dBED21uj_Pb6ZamsJ3XNQkxwQzhNg1GD4WtsGXBJrU4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-outline btn-lg normal-case text-xl"
          >
            GT Cup Polska
          </a>
        </div>
      </section>
    </main>
  );
}
