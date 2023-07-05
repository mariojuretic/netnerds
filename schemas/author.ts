import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
  ],
});
