export type MenuLink = {
    text: string;
    href: string;
    submenu?: MenuLink[];
}
export const menuLinks: MenuLink[] = [
    {text: "Strona główna", href: "/",},
    {text: "Aktualności", href: "/aktualnosci",},
    {
        text: "Informacje", href: "/informacje", submenu: [
            {text: "Regulamin", href: "",},
            {text: "Klasy startowe", href: "",},
            {text: "Harmonogram wystawy", href: "",},
            {text: "Kalendarz modelarski", href: "",},
        ]
    },
    {
        text: "Konkurs GT-Cup", href: "/konkurs", submenu: [
            {text: "Zapisy", href: "/zapisy",},
            {text: "Regulamin", href: "/regulamin",},
            {text: "Wystawy", href: "/wystawy",},
            {text: "Relacje", href: "/relacje",},
        ]
    },
];