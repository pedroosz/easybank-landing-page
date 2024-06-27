import React, { ReactNode } from "react";

interface RootProps {
  children: React.ReactNode;
  image: ReactNode;
}

export default function Root({ children, image }: RootProps) {
  return (
    <div className="flex flex-col rounded-md bg-white">
      {image}
      <div className="space-y-4 p-4">{children}</div>
    </div>
  );
}
