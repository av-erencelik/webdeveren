import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "string",
        },
        {
          title: "Turkish",
          name: "tr",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      description: "Enter a short snippet for the blog",
      title: "Description",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "string",
        },
        {
          title: "Turkish",
          name: "tr",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "object",
      fields: [
        {
          name: "en",
          title: "English",
          type: "array",
          of: [{ type: "reference", to: { type: "category" } }],
        },
        {
          name: "tr",
          title: "Turkish",
          type: "array",
          of: [{ type: "reference", to: { type: "category" } }],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    {
      title: "Is blog post featured",
      name: "featured",
      type: "boolean",
    },
    defineField({
      name: "body",
      title: "Body",
      type: "object",
      fields: [
        {
          title: "English",
          name: "en",
          type: "blockContent",
        },
        {
          title: "Turkish",
          name: "tr",
          type: "blockContent",
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
