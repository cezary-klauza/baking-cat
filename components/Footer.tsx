import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { field: string; href: string }[];
}) => (
  <div className="flex flex-col gap-2">
    <h4 className="font-semibold text-xl text-black-1">{title}</h4>
    <ul>
      {links.map((link) => (
        <li className="font-light text-gray-1">
          {link.href === "" ? (
            <>{link.field}</>
          ) : (
            <Link href={link.href} className="hover:text-gray-2">
              {link.field}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-8 flex max-lg:flex-col justify-between items-center lg:border-t-2 border-gray-3 border-opacity-25">
      <div className="w-full flex max-lg:justify-center items-center max-lg:border-b-2 border-gray-3 border-opacity-25">
        <Image src="/logo-large.png" alt="logo" width={200} height={250} />
      </div>
      <div className="w-full py-8 flex justify-center lg:justify-end gap-12">
        {footerLinks.map((link) => (
          <FooterColumn title={link.title} links={link.links} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
