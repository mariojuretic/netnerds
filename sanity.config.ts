import { theme } from "https://themer.sanity.build/api/hues?default=64748b&primary=0ea5e9&transparent=64748b&positive=22c55e;400&caution=facc15;300&critical=dc2626&lightest=f1f5f9&darkest=0f172a";

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

  theme,
});
