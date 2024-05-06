const preOrder = {
  name: "preOrder",
  type: "document",
  title: "Pre Order",
  hidden: true,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "product",
      type: "reference",
      title: "Product",
      to: [{ type: "product", weak: true }],
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "total",
      type: "number",
      title: "Total",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "customer",
      type: "reference",
      title: "Customer",
      to: [{ type: "user", weak: true }],
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "paymentStatus",
      type: "string",
      title: "Payment Status",
      options: {
        list: [
          { title: "Pending (Cash on delivery)", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
      },
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: {
        options: {
          dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
        },
        initialValue: () => new Date().toISOString(),
      },
    },
  ],
};

export default preOrder;
