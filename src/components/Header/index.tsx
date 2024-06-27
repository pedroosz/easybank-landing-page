"use client";

import useHeaderStore from "@/stores/header-store";
import Image from "next/image";
import Link from "next/link";
import CtaLink from "../cta-link";

export default function Header() {
  const { toggle, isOpen } = useHeaderStore();

  return (
    <header
      data-mobile-toggle={isOpen}
      className="relative z-10 flex h-20 w-full items-center bg-white px-4"
    >
      {/* Desktop header */}
      <div className="mx-auto hidden w-full max-w-container items-center justify-between gap-4 lg:flex">
        <Image src="/logo.svg" alt="EasyBank" width={120} height={30} />

        <nav className="flex items-center gap-4 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Careers</Link>
        </nav>

        <CtaLink href="#">Request Invite</CtaLink>
      </div>

      {/* Mobile header */}
      <div className="relative mx-auto flex w-full max-w-container items-center justify-between gap-4 lg:hidden">
        <Image src="/logo.svg" alt="EasyBank" width={120} height={30} />
        <button onClick={toggle}>toggle</button>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="absolute top-full mt-10 flex w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-4 text-center shadow-2xl shadow-dark-blue">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
          </div>
        )}
      </div>
    </header>
  );
}
