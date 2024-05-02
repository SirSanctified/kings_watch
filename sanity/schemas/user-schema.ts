const user = {
  name: "user",
  type: "document",
  title: "User",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "clerkId",
      type: "string",
      title: "Clerk Id",
      hidden: true,
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "phoneNumber",
      type: "string",
      title: "Phone Number",
    },
    {
      name: "address",
      type: "text",
      title: "Address",
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

export default user;
