import { MenuLink } from '@/types/types';

export const getMenuLinks = (locale: string = 'pl'): MenuLink[] => [
  { text: locale === 'en' ? 'Home' : 'Strona główna', href: '/' },
  { text: locale === 'en' ? 'News' : 'Aktualności', href: 'https://www.facebook.com/share/19g6sMLoXp' },
  {
    text: locale === 'en' ? 'Information' : 'Informacje',
    href: '/informacje',
    submenu: [
      { text: locale === 'en' ? 'Rules' : 'Regulamin', href: '/regulamin' },
      { text: locale === 'en' ? 'Competition classes' : 'Klasy startowe', href: '/klasy-startowe' },
      { text: locale === 'en' ? 'Exhibition schedule' : 'Harmonogram wystawy', href: '/harmonogram' },
      { text: locale === 'en' ? 'Results' : 'Wyniki', href: '/wyniki' },
      { text: locale === 'en' ? 'Modeling calendar' : 'Kalendarz modelarski', href: '/kalendarz' }
    ]
  },
  {
    text: locale === 'en' ? 'Plan your visit' : 'Zaplanuj pobyt',
    href: '/przyjazd',
    submenu: [
      { text: locale === 'en' ? 'Directions' : 'Dojazd', href: '/dojazd' },
      { text: locale === 'en' ? 'Tourism' : 'Turystyka', href: '/turystyka' },
      { text: locale === 'en' ? 'Accommodation' : 'Noclegi', href: '/noclegi' }
    ]
  },
  { text: locale === 'en' ? 'Our Partners' : 'Nasi Partnerzy', href: '/nasi-partnerzy' },
  {
    text: locale === 'en' ? 'Photo Gallery' : 'Galeria Zdjęć',
    href: '/galeria',
    submenu: [
      { text: 'I Meeting', href: '/i-meeting' },
      { text: 'II Meeting', href: '/ii-meeting' }
    ]
  },
  {
    text: 'Konkurs GT-Cup',
    href: '/konkurs',
    submenu: [
      { text: locale === 'en' ? 'Rules' : 'Regulamin', href: '/regulamin_GT' },
      { text: locale === 'en' ? 'Exhibition calendar' : 'Kalendarz wystaw', href: '/wystawy' },
      { text: locale === 'en' ? 'Galleries' : 'Galerie', href: '/galerie' },
      { text: locale === 'en' ? 'Competition results' : 'Wyniki konkursu', href: '/wyniki' }
    ]
  }
];

export const menuLinks: MenuLink[] = getMenuLinks('pl');
