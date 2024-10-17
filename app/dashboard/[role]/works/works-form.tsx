"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
export default function WorksForm({ user }: { user: User | null }) {
  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Works</h1>
      <p className="py-4 text-csrclight">
        Here You can find your works in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> catalog.
      </p>
      <div className="flex flex-col gap-5 py-4">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="#">
              <Image
                className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                src={
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
                  "https://muyocmrtggaomnsberas.supabase.co/storage/v1/object/public/webcomics/cover/comics-src-webcomic-cover-02.webp"
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
