export type MenuLink = {
    text: string;
    href: string;
    submenu?: MenuLink[];
}
export const menuLinks: MenuLink[] = [
    {text: "Strona główna", href: "/",},
    {text: "Aktualności", href: "/aktualnosci",},
    {
        text: "Informacje", href: "/regulamin", submenu: [
            {text: "Regulamin", href: "",},
            {text: "Klasy startowe", href: "",},
            {text: "Harmonogram wystawy", href: "",},
            {text: "Kalendarz modelarski", href: "",},
        ]
    },
    {
        text: "Konkurs GT-Cup", href: "/harmonogram", submenu: [
            {text: "Rejestracja", href: "",},
            {text: "Regulamin", href: "",},
            {text: "Wystawy", href: "",},
            {text: "Relacje", href: "",},
        ]
    },
];