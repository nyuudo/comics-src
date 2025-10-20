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

export default function LikedByCommunity({ productId }: Props) {
  const dispatch = useAppDispatch();
  const { avatars, loading } = useTypedSelector(
    (state) => state.likedByCommunity,
  );

  useEffect(() => {
    if (productId) {
      console.log("LikedByCommunity productId:", productId, typeof productId);
      dispatch(fetchLikedByCommunity(productId));
    }
  }, [dispatch, productId]);

  console.log("LikedByCommunity raw data:", avatars);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-csrcdark/75 font-bold">
        Members of the community that liked this work:
      </p>
      <ul className="flex flex-wrap gap-2">
        {loading ? (
          <li>Loading...</li>
        ) : avatars?.length === 0 ? (
          <li className="clip-followers border grayscale transition duration-1000 ease-in-out hover:grayscale-0">
            <Image
              src={"/assets/images/comics-src-profile-image.png"}
              alt={"Dummy Profile Pic"}
              width={32}
              height={32}
            />
          </li>
        ) : (
          avatars?.map((avatarUrl: string, idx: number) => (
            <li
              key={idx}
              className="clip-followers border grayscale transition duration-1000 ease-in-out hover:grayscale-0"
            >
              <Link href="/about#community">
                <Image
                  src={avatarUrl}
                  alt={"Profile Pic"}
                  width={32}
                  height={32}
                />
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
