import Link from "next/link";
import {MenuLink} from "@/types/types";

export default function Submenu({link}: { link: MenuLink }) {
    return (
        <ul className="hidden group-hover:block w-30 xl:w-45 bg-primary text-primary-content absolute top-full left-0 z-50">
            {link.submenu?.map((sublink) => (
                <li key={sublink.href}
                    className="my-1 font-normal hover:bg-secondary transition-all">
                    <Link
                        className="p-3 w-full flex justify-center items-center wrap-break-word"
                        href={link.href + sublink.href}>{sublink.text}</Link>
                </li>
            ))}
        </ul>)
}