"use client";
import { useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { useDispatch, useSelector } from "react-redux";
import { fetchFanProfile } from "@/store/fanProfileSlice";
import { fetchAuthorProfile } from "@/store/authorProfileSlice";
import { fetchPublisherProfile } from "@/store/publisherProfileSlice";
import { RootState, AppDispatch } from "@/store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default function DeleteForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();
  const role = user?.user_metadata.user_role;

  const username =
    role === "fan"
      ? useSelector((state: RootState) => state.fanProfile.fan_username)
      : role === "author"
        ? useSelector((state: RootState) => state.authorProfile.author_username)
        : role === "publisher"
          ? useSelector(
              (state: RootState) => state.publisherProfile.publisher_name,
            )
          : "";

  useEffect(() => {
    if (user?.id) {
      if (role === "fan") dispatch(fetchFanProfile(user.id));
      else if (role === "author") dispatch(fetchAuthorProfile(user.id));
      else if (role === "publisher") dispatch(fetchPublisherProfile(user.id));
    }
  }, [user, dispatch, role]);

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-csrcdanger text-3xl">Delete Account</h1>
      <div className="flex flex-col gap-5 py-4">
        <p className="text-csrclight">
          <span className="text-csrcyellow">{username}</span>, We&apos;re sorry
          to see you go
        </p>
        <div className="bg-csrclight/25 rounded-lg p-3">
          <h2 className="text-csrcdark text-2xl">Are You sure?</h2>
          <p className="text-csrcdark">
            Once You confirm, all of Your account data will be permanently
            deleted.
          </p>
        </div>
      </div>
      <button className="bg-csrcdanger text-csrclight hover:bg-csrclight/15 flex items-center justify-center gap-x-2 rounded-sm px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:shadow-md hover:delay-150">
        Delete
      </button>
    </main>
  );
}
