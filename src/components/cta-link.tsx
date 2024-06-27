import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends LinkProps, PropsWithChildren {}

export default function CtaLink(props: Props) {
  return (
    <Link
      {...props}
      className="from-lime-green to-bright-cyan w-fit rounded-full bg-gradient-to-r px-6 py-3 text-white"
    />
  );
}
