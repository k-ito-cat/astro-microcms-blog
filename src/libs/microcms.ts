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
  categories: string[];
  eyecatch: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  publishedAt: string;
} & MicroCMSListContent;

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
