"use client";
import { useState, useEffect } from "react";
import { type User } from "@supabase/supabase-js";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { fetchFanProfile, updateFanProfile } from "@/store/fanProfileSlice";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function AccountForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();

  const { fan_bio, fan_socialmedia, fan_url, fan_username, loading, error } =
    useTypedSelector((state) => state.fanProfile);

  const [editedFanBio, setEditedFanBio] = useState(fan_bio || "");

  const [editedFanSocialMedia, setEditedFanSocialMedia] = useState(
    fan_socialmedia || "",
  );
  const [editedFanUrl, setEditedFanUrl] = useState(fan_url || "");
  const [editedFanUsername, setEditedFanUsername] = useState(
    fan_username || "",
  );

  const handleUpdate = (updatedFields: { [key: string]: string }) => {
    if (user?.id) {
      dispatch(
        updateFanProfile({
          userId: user.id,
          updatedData: updatedFields,
        }),
      );
    }
  };

  const handleCancel = () => {
    setEditedFanBio(fan_bio || "");
    setEditedFanSocialMedia(fan_socialmedia || "");
    setEditedFanUrl(fan_url || "");
    setEditedFanUsername(fan_username || "");
  };

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchFanProfile(user.id));
    }
    // to render the value the first time
    if (fan_bio) {
      setEditedFanBio(fan_bio);
    }
    if (fan_socialmedia) {
      setEditedFanSocialMedia(fan_socialmedia);
    }
    if (fan_url) {
      setEditedFanUrl(fan_url);
    }
    if (fan_username) {
      setEditedFanUsername(fan_username);
    }
  }, [user, dispatch, fan_bio, fan_socialmedia, fan_url, fan_username]);

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-3xl text-csrcyellow">My Account</h1>

      <div className="flex flex-col gap-5 py-4">
        <div className="flex items-start gap-2">
          <div className="flex flex-col items-center">
            <Image
              id="profileImage"
              src="/assets/images/comics-src-profile-image.png"
              width={50}
              height={50}
              alt="Fan Profile Image"
            />
            <button className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150">
              Upload
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
            value={editedFanUsername}
            placeholder={editedFanUsername}
            onChange={(e) => setEditedFanUsername(e.target.value)}
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
            id="bio"
            maxLength={250}
            className="block w-full rounded-sm bg-csrclight/5 p-2 text-sm text-csrclight placeholder-csrclight/50 caret-csrcyellow focus:outline-none"
            placeholder="Please, briefly introduce yourself to the community. 250 characters maximum"
            value={editedFanBio}
            onChange={(e) => setEditedFanBio(e.target.value)}
          ></textarea>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="flex gap-3 text-csrcblue">
          <label htmlFor="website">URL:</label>
          <input
            id="website"
            type="text"
            className="block rounded-sm bg-csrclight/5 text-sm text-csrclight caret-csrcyellow focus:outline-none"
            value={editedFanUrl}
            placeholder="mywebsite.com"
            onChange={(e) => setEditedFanUrl(e.target.value)}
          >
            {}
          </input>
        </div>
        <div className="flex gap-3 text-csrcblue">
          <label htmlFor="social">Social Media:</label>
          <input
            id="socialMedia"
            type="text"
            className="block rounded-sm bg-csrclight/5 text-sm text-csrclight caret-csrcyellow focus:outline-none"
            placeholder="@social-media-nickname"
            value={editedFanSocialMedia}
            onChange={(e) => setEditedFanSocialMedia(e.target.value)}
          ></input>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />

        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="flex items-center justify-center gap-x-2 rounded border border-csrclight/75 px-2.5 py-1 text-xs tracking-wider text-csrclight/75 transition delay-150 duration-300 hover:border-transparent hover:bg-csrclight/75 hover:text-csrcdark hover:delay-150"
          >
            <span>Cancel</span>
          </button>
          <button
            className="flex items-center justify-center gap-x-2 rounded bg-csrcyellow px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:bg-green-500 hover:text-csrclight hover:shadow-md hover:delay-150"
            disabled={loading}
            onClick={() =>
              handleUpdate({
                fan_bio: editedFanBio,
                fan_socialmedia: editedFanSocialMedia,
                fan_url: editedFanUrl,
                fan_username: editedFanUsername,
              })
            }
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </main>
  );
}
