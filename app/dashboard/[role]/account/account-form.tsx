"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { type User } from "@supabase/supabase-js";
import type {
  EditedProfile,
  FanProfile,
  AuthorProfile,
  PublisherProfile,
} from "@/types/comics-src-types";

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { fetchFanProfile, updateFanProfile } from "@/store/fanProfileSlice";
import {
  fetchAuthorProfile,
  updateAuthorProfile,
} from "@/store/authorProfileSlice";
import {
  fetchPublisherProfile,
  updatePublisherProfile,
} from "@/store/publisherProfileSlice";

import { uploadAvatar } from "@/store/uploadAvatarSlice";
import Image from "next/image";

import { RootState, AppDispatch } from "@/store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function AccountForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();
  const role = user?.user_metadata.user_role;

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const avatarLoading = useTypedSelector((state) => state.avatar.loading);

  function isFanProfile(profile: EditedProfile): profile is FanProfile {
    return (profile as FanProfile).fan_username !== undefined;
  }

  function isAuthorProfile(profile: EditedProfile): profile is AuthorProfile {
    return (profile as AuthorProfile).author_username !== undefined;
  }

  function isPublisherProfile(
    profile: EditedProfile,
  ): profile is PublisherProfile {
    return (profile as PublisherProfile).publisher_name !== undefined;
  }

  const {
    fan_bio,
    fan_socialmedia,
    fan_url,
    fan_username,
    fan_profileImage,

    loading: fanLoading,
  } = useTypedSelector((state) => state.fanProfile);
  const {
    author_bio,
    author_socialmedia,
    author_url,
    author_username,
    author_profileImage,

    loading: authorLoading,
  } = useTypedSelector((state) => state.authorProfile);

  const {
    publisher_bio,
    publisher_socialmedia,
    publisher_url,
    publisher_name,
    publisher_profileImage,

    loading: publisherLoading,
  } = useTypedSelector((state) => state.publisherProfile);

  const [editedProfile, setEditedProfile] = useState<EditedProfile>(() => {
    switch (role) {
      case "author":
        return {
          author_bio: author_bio || "",
          author_socialmedia: author_socialmedia || "",
          author_url: author_url || "",
          author_username: author_username || "",
          author_profileImage: author_profileImage || "",
        };
      case "publisher":
        return {
          publisher_bio: publisher_bio || "",
          publisher_socialmedia: publisher_socialmedia || "",
          publisher_url: publisher_url || "",
          publisher_name: publisher_name || "",
          publisher_profileImage: publisher_profileImage || "",
        };
      case "fan":
      default:
        return {
          fan_bio: fan_bio || "",
          fan_socialmedia: fan_socialmedia || "",
          fan_url: fan_url || "",
          fan_username: fan_username || "",
          fan_profileImage: fan_profileImage || "",
        };
    }
  });

  const handleUpdate = (updatedFields: { [key: string]: string }) => {
    if (user?.id) {
      switch (role) {
        case "fan":
          dispatch(
            updateFanProfile({
              userId: user.id,
              updatedData: updatedFields as FanProfile,
            }),
          );
          break;
        case "author":
          dispatch(
            updateAuthorProfile({
              userId: user.id,
              updatedData: updatedFields as AuthorProfile,
            }),
          );
          break;
        case "publisher":
          dispatch(
            updatePublisherProfile({
              userId: user.id,
              updatedData: updatedFields as PublisherProfile,
            }),
          );
          break;
        default:
          break;
      }
    }
  };

  const handleCancel = useCallback(() => {
    setEditedProfile(() => {
      switch (role) {
        case "author":
          return {
            author_bio: author_bio || "",
            author_socialmedia: author_socialmedia || "",
            author_url: author_url || "",
            author_username: author_username || "",
            author_profileImage: author_profileImage || "",
          };
        case "publisher":
          return {
            publisher_bio: publisher_bio || "",
            publisher_socialmedia: publisher_socialmedia || "",
            publisher_url: publisher_url || "",
            publisher_name: publisher_name || "",
            publisher_profileImage: publisher_profileImage || "",
          };
        case "fan":
        default:
          return {
            fan_bio: fan_bio || "",
            fan_socialmedia: fan_socialmedia || "",
            fan_url: fan_url || "",
            fan_username: fan_username || "",
            fan_profileImage: fan_profileImage || "",
          };
      }
    });
  }, [
    role,
    fan_bio,
    fan_socialmedia,
    fan_url,
    fan_username,
    fan_profileImage,
    author_bio,
    author_socialmedia,
    author_url,
    author_username,
    author_profileImage,
    publisher_bio,
    publisher_socialmedia,
    publisher_url,
    publisher_name,
    publisher_profileImage,
  ]);

  useEffect(() => {
    if (user?.id) {
      switch (role) {
        case "fan":
          dispatch(fetchFanProfile(user.id));
          break;
        case "author":
          dispatch(fetchAuthorProfile(user.id));
          break;
        case "publisher":
          dispatch(fetchPublisherProfile(user.id));
          break;
        default:
          break;
      }
    }
    handleCancel();
  }, [user, dispatch, role, handleCancel]);

  const profileImageUrl =
    (isFanProfile(editedProfile) && editedProfile.fan_profileImage) ||
    (isAuthorProfile(editedProfile) && editedProfile.author_profileImage) ||
    (isPublisherProfile(editedProfile) &&
      editedProfile.publisher_profileImage) ||
    "/assets/images/comics-src-profile-image.png";

  const loading =
    role === "fan"
      ? fanLoading
      : role === "author"
        ? authorLoading
        : publisherLoading;

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-csrcyellow text-3xl">My Account</h1>

      <div className="flex flex-col gap-5 py-4">
        <div className="flex items-start gap-2">
          <div className="flex flex-col items-center">
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              ref={avatarInputRef}
              style={{ display: "none" }}
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const result = await dispatch(uploadAvatar(file));
                  if (uploadAvatar.fulfilled.match(result) && result.payload) {
                    const key = isFanProfile(editedProfile)
                      ? "fan_profileImage"
                      : isAuthorProfile(editedProfile)
                        ? "author_profileImage"
                        : "publisher_profileImage";

                    // Actualiza el estado local
                    setEditedProfile((prev) => ({
                      ...prev,
                      [key]: result.payload as string,
                    }));

                    // Actualiza en la base de datos
                    if (user?.id) {
                      switch (role) {
                        case "fan":
                          dispatch(
                            updateFanProfile({
                              userId: user.id,
                              updatedData: {
                                ...editedProfile,
                                fan_profileImage: result.payload as string,
                              },
                            }),
                          );
                          break;
                        case "author":
                          dispatch(
                            updateAuthorProfile({
                              userId: user.id,
                              updatedData: {
                                ...editedProfile,
                                author_profileImage: result.payload as string,
                              },
                            }),
                          );
                          break;
                        case "publisher":
                          dispatch(
                            updatePublisherProfile({
                              userId: user.id,
                              updatedData: {
                                ...editedProfile,
                                publisher_profileImage:
                                  result.payload as string,
                              },
                            }),
                          );
                          break;
                      }
                    }
                  }
                }
              }}
            />
            <Image
              id="profileImage"
              src={profileImageUrl}
              width={50}
              height={50}
              className="mb-3 rounded-full"
              alt="Profile Image"
            />
            <button
              type="button"
              className="border-csrclight/75 text-csrclight/75 hover:bg-csrclight/75 hover:text-csrcdark flex items-center justify-center gap-x-2 rounded-sm border px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:border-transparent hover:delay-150"
              onClick={() => avatarInputRef.current?.click()}
              disabled={avatarLoading}
            >
              {avatarLoading ? "Updating..." : "Update"}
            </button>
          </div>
          <p className="text-csrclight/50 max-w-40 text-[10px] text-balance">
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
        <div className="text-csrcblue flex gap-3">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={
              isFanProfile(editedProfile)
                ? editedProfile.fan_username
                : isAuthorProfile(editedProfile)
                  ? editedProfile.author_username
                  : isPublisherProfile(editedProfile)
                    ? editedProfile.publisher_name
                    : ""
            }
            placeholder={
              isFanProfile(editedProfile)
                ? editedProfile.fan_username
                : isAuthorProfile(editedProfile)
                  ? editedProfile.author_username
                  : isPublisherProfile(editedProfile)
                    ? editedProfile.publisher_name
                    : ""
            }
            onChange={(e) =>
              setEditedProfile((prev) => ({
                ...prev,
                [isFanProfile(prev)
                  ? "fan_username"
                  : isAuthorProfile(prev)
                    ? "author_username"
                    : "publisher_name"]: e.target.value,
              }))
            }
            className="bg-csrclight/5 text-csrclight caret-csrcyellow rounded-xs focus:outline-hidden"
          />
        </div>
        <div className="text-csrcblue flex gap-3">
          Email:
          <span className="text-csrclight">{user?.email}</span>
        </div>
        <div className="text-csrcblue flex gap-3">
          Password:
          <button className="border-csrclight/75 text-csrclight/75 hover:bg-csrclight/75 hover:text-csrcdark flex items-center justify-center gap-x-2 rounded-sm border px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:border-transparent hover:delay-150">
            <span>Reset Password</span>
          </button>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="text-csrcblue flex flex-col gap-3">
          <label htmlFor="about">About Me:</label>
          <textarea
            id="bio"
            maxLength={250}
            className="bg-csrclight/5 text-csrclight placeholder-csrclight/50 caret-csrcyellow block w-full rounded-xs p-2 text-sm focus:outline-hidden"
            placeholder="Please, briefly introduce yourself to the community. 250 characters maximum"
            value={
              isFanProfile(editedProfile)
                ? editedProfile.fan_bio
                : isAuthorProfile(editedProfile)
                  ? editedProfile.author_bio
                  : isPublisherProfile(editedProfile)
                    ? editedProfile.publisher_bio
                    : ""
            }
            onChange={(e) =>
              setEditedProfile((prev) => ({
                ...prev,
                [isFanProfile(prev)
                  ? "fan_bio"
                  : isAuthorProfile(prev)
                    ? "author_bio"
                    : "publisher_bio"]: e.target.value,
              }))
            }
          ></textarea>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />
        <div className="text-csrcblue flex gap-3">
          <label htmlFor="website">URL:</label>
          <input
            id="website"
            type="text"
            className="bg-csrclight/5 text-csrclight caret-csrcyellow block rounded-xs text-sm focus:outline-hidden"
            value={
              isFanProfile(editedProfile)
                ? editedProfile.fan_url
                : isAuthorProfile(editedProfile)
                  ? editedProfile.author_url
                  : isPublisherProfile(editedProfile)
                    ? editedProfile.publisher_url
                    : ""
            }
            placeholder="mywebsite.com"
            onChange={(e) =>
              setEditedProfile((prev) => ({
                ...prev,
                [isFanProfile(prev)
                  ? "fan_url"
                  : isAuthorProfile(prev)
                    ? "author_url"
                    : "publisher_url"]: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="text-csrcblue flex gap-3">
          <label htmlFor="social">Social Media:</label>
          <input
            id="socialMedia"
            type="text"
            className="bg-csrclight/5 text-csrclight caret-csrcyellow block rounded-xs text-sm focus:outline-hidden"
            placeholder="@social-media-nickname"
            value={
              isFanProfile(editedProfile)
                ? editedProfile.fan_socialmedia
                : isAuthorProfile(editedProfile)
                  ? editedProfile.author_socialmedia
                  : isPublisherProfile(editedProfile)
                    ? editedProfile.publisher_socialmedia
                    : ""
            }
            onChange={(e) =>
              setEditedProfile((prev) => ({
                ...prev,
                [isFanProfile(prev)
                  ? "fan_socialmedia"
                  : isAuthorProfile(prev)
                    ? "author_socialmedia"
                    : "publisher_socialmedia"]: e.target.value,
              }))
            }
          ></input>
        </div>
        <hr className="border-csrcdark/35 mix-blend-multiply" />

        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="border-csrclight/75 text-csrclight/75 hover:bg-csrclight/75 hover:text-csrcdark flex items-center justify-center gap-x-2 rounded-sm border px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:border-transparent hover:delay-150"
          >
            <span>Cancel</span>
          </button>
          <button
            className="bg-csrcyellow hover:text-csrclight flex items-center justify-center gap-x-2 rounded-sm px-2.5 py-1 text-xs tracking-wider transition delay-150 duration-300 hover:bg-green-500 hover:shadow-md hover:delay-150"
            disabled={loading}
            onClick={() => handleUpdate(editedProfile)}
          >
            {loading ? "Loading..." : "Update"}
          </button>
        </div>
      </div>
    </main>
  );
}
