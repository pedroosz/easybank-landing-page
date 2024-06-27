import Image, { ImageProps } from "next/image";

export default function FeatureCardImage(props: ImageProps) {
  return <Image className="aspect-square w-14 object-contain" {...props} />;
}
