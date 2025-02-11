import {
  createClient,
  type MicroCMSListContent,
  type MicroCMSQueries,
} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string, // 環境変数があるという前提
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export type Blog = {
  title: string;
  content: string;
} & MicroCMSListContent;

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList({ endpoint: "blogs", queries });
};
