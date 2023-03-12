import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import Logo from "./components/studio/Logo";
import { codeInput } from "@sanity/code-input";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Web_Dev_Eren",
  title: "Web Dev Eren",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  theme: myTheme,
});
