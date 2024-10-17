"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
export default function CommunityForm({ user }: { user: User | null }) {
  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Community</h1>
      <p className="py-4 text-csrclight">
        Here You can find people in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> community that
        You are following
      </p>
      <div className="flex flex-col gap-5 py-2">
        <ul className="flex flex-wrap gap-2">
          <li className="border transition duration-1000 ease-in-out clip-followers">
            <Link href="#">
              <Image
                src="/assets/images/comics-src-profile-image.png"
                alt="Fake Profile Pic"
                width={32}
                height={32}
              ></Image>
            </Link>
          </li>
          <li className="border transition duration-1000 ease-in-out clip-followers">
            <Link href="#">
              <Image
                src="/assets/images/comics-src-profile-image.png"
                alt="Fake Profile Pic"
                width={32}
                height={32}
              ></Image>
            </Link>
          </li>
          <li className="border transition duration-1000 ease-in-out clip-followers">
            <Link href="#">
              <Image
                src="/assets/images/comics-src-profile-image.png"
                alt="Fake Profile Pic"
                width={32}
                height={32}
              ></Image>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
