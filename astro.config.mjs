// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "server",
  adapter: awsAmplify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
