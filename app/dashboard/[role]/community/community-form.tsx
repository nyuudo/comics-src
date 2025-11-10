"use client";
import { type User } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchCommunity } from "@/store/communitySlice";
import { fetchFollowedUsers } from "@/store/communityDetailsSlice";
import Image from "next/image";
import Link from "next/link";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function CommunityForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();
  const role = user?.user_metadata.user_role;
  const userId = user?.id;
  const { followers: followerIds, loading: loadingIds } = useTypedSelector(
    (state) => state.community,
  );
  const { users, loading: loadingDetails } = useTypedSelector(
    (state) => state.communityDetails,
  );

  // fetch the ids (existing behavior)
  useEffect(() => {
    if (userId && role) {
      dispatch(fetchCommunity({ userId, role }));
      // fetch the detailed user objects (avatars + username)
      dispatch(fetchFollowedUsers({ userId, role }));
    }
  }, [userId, role, dispatch]);

  const loading = loadingIds || loadingDetails;

  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-csrcyellow text-3xl">My Community</h1>
      <p className="text-csrclight py-4">
        Here You can find people in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> community that
        You are following
      </p>
      <div className="flex flex-col gap-5 py-2">
        <ul className="flex flex-wrap gap-2">
          {loading ? (
            <li>Loading...</li>
          ) : users.length === 0 ? (
            <li className="clip-followers border transition duration-1000 ease-in-out">
              <Image
                src={"/assets/images/comics-src-profile-image.png"}
                alt={"No Community Found"}
                width={32}
                height={32}
              />
            </li>
          ) : (
            users.map((u) => (
              <li
                key={u.id}
                className="clip-followers border transition duration-1000 ease-in-out"
              >
                <Link href={`/profile/${encodeURIComponent(u.username)}`}>
                  <Image
                    src={
                      u.profileImage ||
                      "/assets/images/comics-src-profile-image.png"
                    }
                    alt={`${u.username}'s profile`}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
