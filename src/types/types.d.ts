export type Image = {
    src: string;
    width: number;
    height: number;
    alt?: string
}

export type MenuLink = {
    text: string;
    href: string;
    submenu?: MenuLink[];
}