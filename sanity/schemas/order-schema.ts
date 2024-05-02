import { client } from "../product-utils";

const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "user",
      type: "reference",
      title: "Order For",
      to: [{ type: "user" }],
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [{ type: "reference", to: [{ type: "orderItem" }] }],
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
      name: "number",
      type: "number",
      title: "Order Number",
      options: {
        min: 0,
        readonly: true,
      },
      initialValue: async () => {
        const count = await client
          .fetch(`*[_type == "order"] | length`)
          .then((count: number) => count + 1);
        return count;
      },
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    {
      name: "total",
      type: "number",
      title: "Total",
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
        readonly: true,
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};

export default order;
