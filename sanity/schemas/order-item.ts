const orderItem = {
  name: "orderItem",
  type: "document",
  title: "Order Item",
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
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "total",
      type: "number",
      title: "Total",
    },
  ],
};

export default orderItem;
