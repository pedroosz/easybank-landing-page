import Image from "next/image";
import CtaLink from "./cta-link";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center bg-very-light-gray pb-8">
      <div className="relative mx-auto flex h-full w-full max-w-container flex-col items-center gap-4 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-6 px-4 text-center lg:w-1/2 lg:items-start lg:justify-normal lg:text-left xl:px-0">
          <h1 className="text-5xl font-light">
            Next generation digital banking
          </h1>

          <p className="text-center text-base lg:max-w-96 lg:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <CtaLink href="#">Request Invite</CtaLink>
        </div>

        <div className="order-first lg:absolute lg:-right-[26rem] lg:top-1/2 lg:order-last lg:-translate-y-1/2">
          <Image
            className="pointer-events-none right-0 top-0 hidden shrink-0 lg:block"
            src="/decorations/bg-intro-desktop.svg"
            alt="Wavy and colorful gradient background"
            width={1024}
            height={1024}
          />

          <Image
            className="pointer-events-none shrink-0 lg:hidden"
            src="/decorations/bg-intro-mobile.svg"
            alt="Wavy and colorful gradient background"
            width={1024}
            height={1024}
          />

          <Image
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2"
            src="/decorations/image-mockups.png"
            alt="Four phones displaced in a cross-shaped pattern"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
