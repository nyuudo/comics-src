import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tables } from "@/types/database";
import type { PublishersProducts } from "@/types/comics-src-types";

// Use a client-exposed env var. In Next.js this must be NEXT_PUBLIC_*, in Vite use VITE_*, etc.
// Default to a relative path so same-origin APIs (e.g. Next.js API routes) work without CORS.
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API ?? "/api/";

export const comicsSrcApi = createApi({
  reducerPath: "comicsSrcApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["comics"],
  endpoints: (builder) => ({
    // indicate the endpoint returns an array of PublishersProducts
    search: builder.query<PublishersProducts[], string>({
      // encode the query parameter to be safe with special characters
      query: (q) => `search?product_title=${encodeURIComponent(q)}`,
      providesTags: (result, error, search) => [{ type: "comics", search }],
    }),
  }),
});

// Export the generated hook for use in client components/pages
export const { useSearchQuery } = comicsSrcApi;
