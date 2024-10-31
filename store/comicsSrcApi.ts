import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tables } from "@/types/database";

const baseUrl = process.env.BASE_URL_API || "http://localhost:3000/api/";

export const comicsSrcApi = createApi({
  reducerPath: "comicsSrcApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["comics"],
  endpoints: (builder) => ({
    search: builder.query<Tables<"Publishers Product">, string>({
      query: (q) => `search?product_title=${q}`,
      providesTags: (result, error, search) => [{ type: "comics", search }],
    }),
  }),
});
