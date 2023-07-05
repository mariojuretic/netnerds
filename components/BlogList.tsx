import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import urlFor from "@/lib/urlFor";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <>
      <div className="my-8 h-px w-full bg-sky-500" />

      <main className="mb-8 grid grid-cols-1 gap-8 px-8 py-4 md:py-8 lg:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/post/${post.slug.current}`}
            className="mx-auto max-w-2xl"
          >
            <div className="group flex flex-col">
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src={urlFor(post.image).url()}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 flex w-full justify-between space-x-4 rounded-lg bg-black/25 p-4 text-white backdrop-blur-sm sm:items-center">
                  <div>
                    <p className="text-sm font-semibold leading-tight sm:text-base">
                      {post.title}
                    </p>
                    <p className="text-xs text-slate-300 sm:text-sm">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col justify-end space-y-1 sm:flex-row sm:space-x-2 sm:space-y-0">
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className="rounded-lg bg-sky-500 px-3 py-1 text-center text-xs"
                      >
                        {category.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-4">
                <p className="text-lg font-semibold">{post.title}</p>
                <p className="line-clamp-2 text-sm text-slate-500">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 font-semibold decoration-sky-500 decoration-4 group-hover:underline">
                <span>Read Post</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
