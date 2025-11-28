import React, { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-col items-center p-6">
          <h1 className="text-csrcblue text-xl font-bold">Search</h1>
          <hr className="border-csrcdark/15 border" />
          <p className="text-csrcdark/75 mt-4">Loading search…</p>
        </main>
      }
    >
      <SearchClient />
    </Suspense>
  );
}