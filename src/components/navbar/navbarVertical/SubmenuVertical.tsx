import Link from 'next/link';
import { MenuLink } from '@/types/types';

export default function SubmenuVertical({
  link,
  onLinkClick
}: {
  link: MenuLink;
  onLinkClick: () => void;
}) {
  return (
    <ul className="text-sm">
      {link.submenu?.map((sublink) => (
        <li key={sublink.href}>
          <Link
            onClick={onLinkClick}
            className="m-1 hover:bg-primary text-sm"
            href={link.href + sublink.href}
          >
            {sublink.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
