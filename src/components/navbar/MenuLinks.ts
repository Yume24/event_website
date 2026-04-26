import { MenuLink } from '@/types/types';

export const menuLinks: MenuLink[] = [
  { text: 'Strona główna', href: '/' },
  { text: 'Aktualności', href: 'https://www.facebook.com/share/19g6sMLoXp' },
  {
    text: 'Informacje',
    href: '/informacje',
    submenu: [
      { text: 'Regulamin', href: '/regulamin' },
      { text: 'Klasy startowe', href: '/klasy-startowe' },
      { text: 'Harmonogram wystawy', href: '/harmonogram' },
      { text: 'Wyniki', href: '/wyniki' },
      { text: 'Kalendarz modelarski', href: '/kalendarz' }
    ]
  },
  {
    text: 'Przyjazd',
    href: '/przyjazd',
    submenu: [
      { text: 'Dojazd', href: '/dojazd' },
      { text: 'Turystyka', href: '/turystyka' },
      { text: 'Noclegi', href: '/noclegi' }
    ]
  },
  { text: 'Nasi Partnerzy', href: '/nasi-partnerzy' },
  {
    text: 'Galeria Zdjęć',
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
      { text: 'Regulamin', href: '/regulamin_GT' },
      { text: 'Kalendarz wystaw', href: '/wystawy' },
      { text: 'Galerie', href: '/galerie' },
      { text: 'Wyniki konkursu', href: '/wyniki' }
    ]
  }
];
