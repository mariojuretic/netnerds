import Image from "next/image";
import { groq } from "next-sanity";

import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";

type Props = {
  params: {
    slug: string;
  };
};

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }
`;

export default async function PostPage({ params: { slug } }: Props) {
  const post: Post = await client.fetch(query, { slug });

  return (
    <article>
      <section className="relative my-8 flex min-h-[16rem] overflow-hidden bg-sky-500 xl:rounded-lg">
        <Image
          src={urlFor(post.image).url()}
          alt={post.title}
          fill
          className="scale-110 object-cover object-center opacity-25 blur-sm grayscale"
        />

        <div className="relative flex flex-1 flex-col justify-between p-8 text-white">
          <div className="flex items-center space-x-1 md:space-x-2 lg:order-3 lg:mt-4 lg:justify-end">
            {post.categories.map((category) => (
              <div
                key={category._id}
                className="rounded-lg bg-black/50 px-3 py-1 text-center text-xs text-white"
              >
                {category.title}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col space-y-4 lg:order-1 lg:mt-0 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {post.title}
              </h1>
              <p className="text-sm text-slate-300">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center space-x-4 lg:shrink-0">
              <Image
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="font-semibold">{post.author.name}</h3>
            </div>
          </div>

          <p className="mt-4 max-w-prose text-sm md:text-base lg:order-2">
            {post.description}
          </p>
        </div>
      </section>
    </article>
  );
}
