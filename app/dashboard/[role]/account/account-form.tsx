"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/browser";
import { type User } from "@supabase/supabase-js";
import Image from "next/image";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);

  /* getProfile */
  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const {
        data: fanData,
        error: fanError,
        status: fanStatus,
      } = await supabase
        .from("Fan")
        .select("fan_username")
        .eq("fan_id", user?.id)
        .single();

      if (fanError && fanStatus !== 406) {
        console.log(fanError);
        throw fanError;
      }

      const {
        data: authorData,
        error: authorError,
        status: authorStatus,
      } = await supabase
        .from("Author")
        .select("author_username")
        .eq("author_id", user?.id)
        .single();

      if (authorError && authorStatus !== 406) {
        console.log(authorError);
        throw authorError;
      }

      const {
        data: publisherData,
        error: publisherError,
        status: publisherStatus,
      } = await supabase
        .from("Publisher")
        .select("publisher_name")
        .eq("publisher_id", user?.id)
        .single();

      if (publisherError && publisherStatus !== 406) {
        console.log(publisherError);
        throw publisherError;
      }

      if (fanData) {
        setUsername(fanData.fan_username);
      } else if (authorData) {
        setUsername(authorData.author_username);
      } else if (publisherData) {
        setUsername(publisherData.publisher_name);
      }
    } catch (error) {
      console.log("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);
  /* useEffect */
  useEffect(() => {
    getProfile();
  }, [user, getProfile]);
  /* updateProfile */
  async function updateProfile({ username }: { username: string | null }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("Fan").upsert({
        id: user?.id as string,
        username,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Account</h1>

      <div className="flex flex-col gap-5 py-4">
        <div className="flex items-start gap-2">
          {/* AVATAR */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/images/comics-src-profile-image.png"
              width={50}
              height={50}
              alt="Fan Profile Image"
            />
            <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
              Update
            </button>
          </div>
          <p className="max-w-40 text-balance text-[10px] text-csrclight/50">
            <span className="text-csrclight/75">Minimum dimensions: </span>50x50
            pixels
            <br />
            <span className="text-csrclight/75">Maximum file size: </span>1 MB
            <br />
            <span className="text-csrclight/75">File format: </span>JPEG, PNG,
            WEBP
          </p>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="flex gap-3 text-csrcblue">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-sm bg-csrclight/5 text-csrclight caret-csrcyellow focus:outline-none"
          />
        </div>
        <div className="flex gap-3 text-csrcblue">
          Email:
          <span className="text-csrclight">{user?.email}</span>
        </div>
        <div className="flex gap-3 text-csrcblue">
          Password:
          <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
            <span>Reset Password</span>
          </button>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="flex flex-col gap-3 text-csrcblue">
          <label htmlFor="about">About Me:</label>
          <textarea
            maxLength={250}
            className="block w-full rounded-sm bg-csrclight/5 p-2 text-sm text-csrclight placeholder-csrclight/50 caret-csrcyellow focus:outline-none"
            placeholder="Please, briefly introduce yourself to the community. 250 characters maximum"
          ></textarea>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="flex gap-3 text-csrcblue">
          <label htmlFor="website">URL:</label>
          <input
            id="website"
            type="text"
            c
            className="block rounded-sm bg-csrclight/5 text-sm text-csrclight caret-csrcyellow focus:outline-none"
            placeholder="mywebsite.com"
          >
            {}
          </input>
        </div>
        <div className="flex gap-3 text-csrcblue">
          <label htmlFor="social">Social Media:</label>
          <input
            id="social media"
            type="text"
            className="block rounded-sm bg-csrclight/5 text-sm text-csrclight caret-csrcyellow focus:outline-none"
            placeholder="@social-media-nickname"
          >
            {}
          </input>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />

        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
            <span>Cancel</span>
          </button>
          <button
            className="flex items-center justify-center gap-x-2 rounded bg-csrcyellow px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:bg-green-500 hover:text-csrclight hover:shadow-md hover:delay-150"
            disabled={loading}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </main>
  );
}
