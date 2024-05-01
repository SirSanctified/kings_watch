const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: "name",
        maxLength: 200,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
export default product;
