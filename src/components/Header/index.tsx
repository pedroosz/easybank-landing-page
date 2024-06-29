"use client";

import useHeaderStore from "@/stores/header-store";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { FaBars } from "react-icons/fa6";
import CtaLink from "../cta-link";

interface NavLinkProps extends LinkProps, PropsWithChildren {}

function NavLink(props: NavLinkProps) {
  return <Link className="duration-200 hover:text-black" {...props} />;
}

export default function Header() {
  const { toggle, isOpen } = useHeaderStore();

  return (
    <header
      data-mobile-toggle={isOpen}
      className="fixed top-0 z-10 flex h-20 w-full items-center bg-white px-4"
    >
      {/* Desktop header */}
      <div className="mx-auto hidden w-full max-w-container items-center justify-between gap-4 lg:flex">
        <Image src="/logo.svg" alt="EasyBank" width={120} height={30} />

        <nav className="flex items-center gap-4 text-sm">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Careers</NavLink>
        </nav>

        <CtaLink href="#">Request Invite</CtaLink>
      </div>

      {/* Mobile header */}
      <div className="relative mx-auto flex w-full max-w-container items-center justify-between gap-4 lg:hidden">
        <Image src="/logo.svg" alt="EasyBank" width={120} height={30} />
        <button onClick={toggle} aria-label="Navigation menu toggle">
          <FaBars />
        </button>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-10 flex w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-4 text-center shadow-2xl shadow-dark-blue">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Careers</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
