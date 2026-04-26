import Image from 'next/image';

const logos = [
  { src: '/static/images/sponsors/mojehobby.jpg', width: 400, height: 440, alt: 'Moje Hobby' },
  { src: '/static/images/sponsors/paint-forge-napis.bmp', width: 1706, height: 2565, alt: 'Paint Forge' },
  { src: '/static/images/sponsors/DetalHobby.jpg', width: 1200, height: 1200, alt: 'Detal Hobby' },
  { src: '/static/images/sponsors/yamamoto.png', width: 549, height: 595, alt: 'Yamamoto' },
  { src: '/static/images/sponsors/maxhobby.jpg', width: 509, height: 509, alt: 'MaxHobby' },
  { src: '/static/images/sponsors/arma_hobby.png', width: 319, height: 135, alt: 'Arma Hobby' },
  { src: '/static/images/sponsors/umig-ogrodzieniec.jpg', width: 496, height: 572, alt: 'UMIG Ogrodzieniec' },
  { src: '/static/images/sponsors/fundacja-bonera.jpg', width: 820, height: 820, alt: 'Fundacja Bonera' },
  { src: '/static/images/sponsors/logo_1_big.png', width: 775, height: 300, alt: 'System' },
  { src: '/static/images/patrons/eastmodels.jpg', width: 2048, height: 1146, alt: 'Eastmodels' },
  { src: '/static/images/patrons/minfo.jpg', width: 1000, height: 1000, alt: 'Minfo' },
  { src: '/static/images/patrons/spi.jpg', width: 500, height: 500, alt: 'SPI' }
];

export default function NasiPartnerzy() {
  return (
    <main className="bg-base-100 text-base-content py-16 px-10 md:px-20">
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
            className="w-40"
          />
        ))}
      </div>
    </main>
  );
}
