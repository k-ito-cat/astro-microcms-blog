// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import awsAmplify from "astro-aws-amplify";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "server",
  integrations: [mdx(), sitemap()],
  adapter: awsAmplify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
