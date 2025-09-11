"use client";
import { type User } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { fetchUserCollection } from "@/store/userCollectionSlice";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function CollectionForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();
  const role = user?.user_metadata.user_role;
  const userId = user?.id;
  const { items, loading } = useTypedSelector((state) => state.userCollection);

  useEffect(() => {
    if (userId && role) {
      dispatch(fetchUserCollection({ userId, role }));
    }
  }, [userId, role, dispatch]);
  return (
    <main className="mx-auto bg-transparent px-0 py-5 md:mx-0 md:px-10 md:py-10">
      <h1 className="text-csrcyellow text-3xl">My Collection</h1>
      <p className="text-csrclight py-4">
        Here You can find the works in the COMICS/
        <span className="align-text-top text-[0.6rem]">SRC</span> catalog that
        are part of your collection
      </p>

      <div className="flex flex-col gap-5 py-2">
        <ul className="flex flex-wrap gap-4">
          {loading ? (
            <li>Loading...</li>
          ) : items.length === 0 ? (
            <li>
              <Image
                className="opacity-50"
                src={"/assets/images/comics-src-collection-no-item.svg"}
                alt={"No Items Found"}
                width={80}
                height={133}
              />
            </li>
          ) : (
            items.map((cover: string, idx: number) => (
              <li key={cover + idx}>
                <Image
                  src={cover}
                  alt={`Collection Item ${idx + 1}`}
                  width={80}
                  height={133}
                />
              </li>
            ))
          )}
          <li>
            <Link href="/catalog">
              <Image
                className="opacity-50 transition duration-300 hover:scale-[0.975] hover:opacity-100 hover:drop-shadow-md hover:delay-150"
                src={"/assets/images/comics-src-collection-add-item.svg"}
                alt={"Add New Item"}
                width={80}
                height={133}
              />
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
