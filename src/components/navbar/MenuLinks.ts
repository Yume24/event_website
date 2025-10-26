import { MenuLink } from '@/types/types';

export const menuLinks: MenuLink[] = [
  { text: 'Strona główna', href: '/' },
  { text: 'Aktualności', href: '/aktualnosci' },
  {
    text: 'Informacje',
    href: '/informacje',
    submenu: [
      { text: 'Regulamin', href: '/regulamin' },
      { text: 'Klasy startowe', href: '/klasy-startowe' },
      { text: 'Harmonogram wystawy', href: '/harmonogram' },
      { text: 'Kalendarz modelarski', href: '/kalendarz' }
    ]
  },
  {
    text: 'Konkurs GT-Cup',
    href: '/konkurs',
    submenu: [
      { text: 'Zapisy', href: '/zapisy' },
      { text: 'Regulamin', href: '/regulamin_GT' },
      { text: 'Wystawy', href: '/wystawy' },
      { text: 'Relacje', href: '/relacje' }
    ]
  }
];
