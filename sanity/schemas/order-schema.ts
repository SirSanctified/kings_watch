const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "user",
      type: "reference",
      title: "Order For",
      to: [{ type: "user", weak: true }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "address",
      type: "string",
      title: "Address",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [{ type: "reference", to: [{ type: "orderItem", weak: true }] }],
      validation: (Rule: { min: (arg0: number) => any }) =>
        Rule.min(1).error("Order must have at least one item"),
    },
    {
      name: "total",
      type: "number",
      title: "Total",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "number",
      type: "number",
      title: "Order Number",
      options: {
        min: 0,
      },
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "In Transit", value: "inTransit" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};

export default order;
