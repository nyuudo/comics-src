"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";

export default function DeleteForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("Fan")
        .select("fan_username")
        .eq("fan_id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }
      if (data) {
        setUsername(data.fan_username);
      }
    } catch (error) {
      console.log("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcdanger">Delete Account</h1>
      <div className="flex flex-col gap-5 py-4">
        <p className="text-csrclight">
          <span className="text-csrcyellow">{username}</span>, We&apos;re sorry
          to see you go
        </p>
        <div className="rounded-lg bg-csrclight/25 p-3">
          <h2 className="text-2xl text-csrcdark">Are You sure?</h2>
          <p className="text-csrcdark">
            Once You confirm, all of Your account data will be permanently
            deleted.
          </p>
        </div>
      </div>
      <button className="flex items-center justify-center gap-x-2 rounded bg-csrcdanger px-2.5 py-1 text-xs tracking-wider text-csrclight transition delay-150 duration-300 hover:bg-csrclight/15 hover:shadow-md hover:delay-150">
        Delete
      </button>
    </main>
  );
}
