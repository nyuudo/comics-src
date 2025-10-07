"use client";
import { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { fetchCommunityUsers } from "@/store/communityUsersSlice";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function Community() {
  const dispatch = useAppDispatch();
  const { users, loading } = useTypedSelector((state) => state.communityUsers);

  useEffect(() => {
    dispatch(fetchCommunityUsers());
  }, [dispatch]);

  return (
    <section className="bg-csrcblue flex flex-col items-center justify-center p-4">
      <h1 className="text-csrcyellow py-4 text-center text-3xl font-bold">
        Community
      </h1>
      <p className="text-csrcdark text-center break-words">
        Likeminded people who create, publish or just enjoy comics. <br></br>A
        place where you could stay in contact with them and maybe support your
        favorite authors.
      </p>
      <ul className="flex flex-row flex-wrap gap-2 py-4 lg:gap-6">
        {loading ? (
          <li>Loading...</li>
        ) : (
          users.map((user) => (
            <li
              key={user.username}
              className="p-6 mix-blend-screen transition delay-150 duration-300 ease-in-out hover:mix-blend-normal"
            >
              <Link
                className="flex flex-col items-center gap-1"
                href={`/profile/${user.username}`}
              >
                <Image
                  className="clip-followers"
                  src={
                    user.profileImage ||
                    "/assets/images/comics-src-profile-image.png"
                  }
                  alt={`${user.username}'s profile`}
                  width={64}
                  height={64}
                ></Image>
                <p className="text-csrcdark text-center text-sm">
                  {user.username}
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
