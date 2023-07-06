import Link from "next/link";
import Image from "next/image";
import type {
  PortableTextReactComponents,
  PortableTextTypeComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

import urlFor from "@/lib/urlFor";

export const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<any>) => (
      <Image
        src={urlFor(value).url()}
        alt="Image"
        width={800}
        height={600}
        className="h-auto w-full rounded-lg"
      />
    ),
  },

  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<any>) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
