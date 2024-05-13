export const contact = {
  name: "contact",
  title: "Customer Messages",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
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
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "subject",
      type: "string",
      title: "Subject",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "message",
      type: "text",
      title: "Message",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm",
        readonly: true,
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
};

export default contact;
