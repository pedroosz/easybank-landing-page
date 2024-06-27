import Image, { ImageProps } from "next/image";

export default function ArticleImage(props: ImageProps) {
  return <Image className="h-40 w-full rounded-t-md object-cover" {...props} />;
}
