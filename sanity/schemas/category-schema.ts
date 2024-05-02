const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};

export default category;
