import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity";

export default defineConfig({
  name: "default",
  title: "Kings Watch - Admin Panel",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/admin",
  plugins: [structureTool()],

  schema: { types: schemas },
});
