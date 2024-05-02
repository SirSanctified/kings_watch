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
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
    {
      name: "user",
      type: "reference",
      title: "User",
      to: [{ type: "user" }],
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
