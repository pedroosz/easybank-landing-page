import { ReactNode } from "react";

interface RootProps {
  children: React.ReactNode;
  image: ReactNode;
}

export default function Root({ children, image }: RootProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      {image}
      {children}
    </div>
  );
}
