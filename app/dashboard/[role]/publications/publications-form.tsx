"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

export default function PublicationsForm({ user }: { user: User | null }) {
  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-csrcyellow text-3xl">Publications</h1>
      <p className="text-csrclight py-4">
        Here You can find your published work in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> catalog.
      </p>
      <div className="flex flex-col gap-5 py-2">
        <ul className="flex flex-wrap gap-4">
          <li>
            <Link href="#">
              <Image
                className="opacity-50"
                src={"/assets/images/comics-src-collection-no-item.svg"}
                alt={"No Items Found"}
                width={80}
                height={133}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                className="opacity-50"
                src={"/assets/images/comics-src-collection-no-item.svg"}
                alt={"No Items Found"}
                width={80}
                height={133}
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image
                className="opacity-50"
                src={"/assets/images/comics-src-collection-no-item.svg"}
                alt={"No Items Found"}
                width={80}
                height={133}
              />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
