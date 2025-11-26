"use client";
import { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchLikedByCommunity } from "@/store/fetchedLikedByCommunity";
import Image from "next/image";
import Link from "next/link";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

type Props = {
  productId: string;
};

type AvatarItem = {
  url: string;
  username: string;
};

export default function LikedByCommunity({ productId }: Props) {
  const dispatch = useAppDispatch();
  const { avatars, loading } = useTypedSelector(
    (state) => state.likedByCommunity,
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchLikedByCommunity(productId));
    }
  }, [dispatch, productId]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-csrcdark/75 font-bold">
        Members of the community that liked this work:
      </p>
      <ul className="flex flex-wrap gap-2">
        {loading ? (
          <li>Loading...</li>
        ) : (avatars as AvatarItem[])?.length === 0 ? (
          <li className="clip-followers border grayscale transition duration-1000 ease-in-out hover:grayscale-0">
            <Image
              src={"/assets/images/comics-src-profile-image.png"}
              alt={"Dummy Profile Pic"}
              width={32}
              height={32}
            />
          </li>
        ) : (
          (avatars as AvatarItem[])?.map((avatar, idx) => {
            const href = avatar?.username
              ? `/profile/${avatar.username}`
              : "/about#community";
            const imgSrc =
              avatar?.url || "/assets/images/comics-src-profile-image.png";
            return (
              <li
                key={idx}
                className="clip-followers border grayscale transition duration-1000 ease-in-out hover:grayscale-0"
              >
                <Link href={href}>
                  <Image
                    src={imgSrc}
                    alt={
                      avatar?.username
                        ? `${avatar.username} Profile Pic`
                        : "Profile Pic"
                    }
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
