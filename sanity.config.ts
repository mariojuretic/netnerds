import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./schemas";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  name: "netnerds",
  basePath: "/studio",
  title: "NetNerds",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
