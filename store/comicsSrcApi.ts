import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { ComicSrcWebComic } from "@/types/comics-src-types";

export const comicsSrcApi = createApi({
  reducerPath: "comicsSrcApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: ["comics"],
  endpoints: (builder) => ({
    search: builder.query<ComicSrcWebComic[], string>({
      query: (q) => `search?title=${q}`,
      providesTags: (result, error, search) => [{ type: "comics", search }],
    }),
  }),
});
