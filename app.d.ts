type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Author extends Base {
  _type: "author";
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Category extends Base {
  _type: "category";
  description: string;
  title: string;
}

interface Post extends Base {
  _type: "post";
  author: Author;
  body: (Block | Image)[];
  categories: Category[];
  description: string;
  image: Image;
  publishedAt: string;
  title: string;
  slug: Slug;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  level?: number;
  listItem?: "bullet" | "number";
  markDefs: MarkDef[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
}

interface Image {
  _key?: string;
  _type: "image";
  asset: Reference;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Reference {
  _key?: string;
  _ref: string;
  _type: "reference";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface MarkDef {
  _key: string;
  _type: "link";
  href: string;
}
