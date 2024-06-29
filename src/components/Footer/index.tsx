import Link from "next/link";
import CtaLink from "../cta-link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-blue fill-white px-4 py-16">
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center lg:flex-row lg:gap-24 lg:text-left">
        <div className="flex flex-col items-center gap-4">
          <Image src="/logo-light.svg" alt="EasyBank" width={120} height={30} />

          <nav className="flex flex-col items-center gap-4 text-sm"></nav>
        </div>

        <nav className="flex flex-col justify-center gap-4 text-sm">
          <Link className="text-white" href="/">
            About Us
          </Link>
          <Link className="text-white" href="/">
            Contact
          </Link>
          <Link className="text-white" href="/">
            Blog
          </Link>
        </nav>

        <nav className="flex flex-col justify-center gap-4 text-sm">
          <Link className="text-white" href="/">
            Carreers
          </Link>
          <Link className="text-white" href="/">
            Support
          </Link>
          <Link className="text-white" href="/">
            Privacy Policy
          </Link>
        </nav>

        <div className="mr-0 flex flex-col items-center gap-4 lg:ml-auto">
          <nav className="flex flex-col items-center gap-4 text-sm">
            <CtaLink href="#">Request Invite</CtaLink>
            <p>© Easybank. All Rights Reserved</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}
