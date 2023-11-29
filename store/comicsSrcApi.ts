import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { PublishersProducts } from "@/types/comics-src-types";

const baseUrl = process.env.BASE_URL_API || "http://localhost:3000/api/";

export const comicsSrcApi = createApi({
  reducerPath: "comicsSrcApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["comics"],
  endpoints: (builder) => ({
    search: builder.query<PublishersProducts[], string>({
      query: (q) => `search?product_title=${q}`,
      providesTags: (result, error, search) => [{ type: "comics", search }],
    }),
  }),
});
