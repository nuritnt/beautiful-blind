import * as prismic from "@prismicio/client";

export const repositoryName = "the-beautiful-blind";

export const client = prismic.createClient(repositoryName, {
  accessToken: "",
});
