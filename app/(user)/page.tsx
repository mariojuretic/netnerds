import { groq } from "next-sanity";

import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client";

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
