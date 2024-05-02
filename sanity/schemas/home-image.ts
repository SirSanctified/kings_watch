const homeImage = {
  name: "homeImage",
  type: "document",
  title: "Home Image",
  hidden: true,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};

export default homeImage;
