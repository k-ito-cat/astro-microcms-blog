import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

console.log(import.meta.env.MICROCMS_SERVICE_DOMAIN);

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN as string, // 環境変数があるという前提
  apiKey: import.meta.env.MICROCMS_API_KEY as string,
});

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList({ endpoint: "blogs", queries });
};
