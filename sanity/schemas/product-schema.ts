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
      name: "category",
      type: "array",
      title: "Category",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "image",
      type: "image",
      title: "Main Image",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "extraImages",
      type: "array",
      title: "Extra Images",
      of: [{ type: "image" }],
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
      validation: (Rule: { required: () => any }) => Rule.required().min(0),
    },
    {
      name: "stock",
      type: "number",
      title: "Quantity in Stock",
      validation: (Rule: { required: () => any }) => Rule.required().min(0),
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        readonly: true,
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};
export default product;
