"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
export default function CollectionForm({ user }: { user: User | null }) {
  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Collection</h1>
      <p className="py-4 text-csrclight">
        Here You can find the works in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> catalog that
        are part of your collection
      </p>
      <div className="flex flex-col gap-5 py-2">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="#">
              <Image
                className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"Comic Sample"}
                width={80}
                height={133}
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"Comic Sample"}
                width={80}
                height={133}
              ></Image>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/comics/cover/comics-src-cover-img-sample-01.webp"
                }
                alt={"Comic Sample"}
                width={80}
                height={133}
              ></Image>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
