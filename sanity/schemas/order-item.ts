const orderItem = {
  name: "orderItem",
  type: "document",
  title: "Order Item",
  hidden: true,
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
