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
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        filter: "_type == 'user'",
      },
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [{ type: "reference", to: [{ type: "orderItem" }] }],
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
      name: "total",
      type: "number",
      title: "Total",
      options: {
        readonly: true,
        min: 0,
      },
      initialValue: async () => {
        const total = await client
          .fetch(`*[_type == "order"] | map(.total) | add`)
          .then((total: number) => total);
        return total;
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
        readonly: true,
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};

export default order;
