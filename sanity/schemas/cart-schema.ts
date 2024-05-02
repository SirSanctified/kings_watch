const cart = {
  name: "cart",
  title: "Cart",
  type: "document",
  fields: [
    {
      name: "product",
      type: "reference",
      title: "Product",
      to: [{ type: "product" }],
      options: {
        filter: "isPublished",
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "user",
      type: "reference",
      title: "User",
      to: [{ type: "user" }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Completed", value: "completed" },
          { title: "Canceled", value: "canceled" },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
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

export default cart;
