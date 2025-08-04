"use client";
import { useCallback, useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import type {
  EditedCollection,
  FanCollection,
  AuthorCollection,
} from "@/types/comics-src-types";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import {
  fetchFanCollection,
  updateFanCollection,
} from "@/store/fanCollectionSlice";
import {
  fetchAuthorCollection,
  updateAuthorCollection,
} from "@/store/authorCollectionSlice";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function CollectionForm({ user }: { user: User | null }) {
  const dispatch = useAppDispatch();
  const role = user?.user_metadata.user_role;

  function isFanCollection(
    collection: EditedCollection,
  ): collection is FanCollection {
    return (collection as FanCollection).fan_collection !== undefined;
  }

  function isAuthorCollection(
    collection: EditedCollection,
  ): collection is AuthorCollection {
    return (collection as AuthorCollection).author_collection !== undefined;
  }

  const { fan_collection, loading: fanLoading } = useTypedSelector(
    (state) => state.fanCollection,
  );

  const { author_collection, loading: authorLoading } = useTypedSelector(
    (state) => state.authorCollection,
  );

  const [collection, setCollection] = useState<EditedCollection>(() => {
    switch (role) {
      case "fan":
        return {
          fan_collection: fan_collection || [],
        };
      case "author":
      default:
        return {
          author_collection: author_collection || [],
        };
    }
  });

  const handleUpdate = (updatedFields: { [key: string]: string[] }) => {
    if (user?.id) {
      switch (role) {
        case "fan":
          dispatch(
            updateFanCollection({
              userId: user.id,
              updatedData: updatedFields as FanCollection,
            }),
          );
          break;
        case "author":
          dispatch(
            updateAuthorCollection({
              userId: user.id,
              updatedData: updatedFields as AuthorCollection,
            }),
          );
          break;
        default:
          break;
      }
    }
  };

  const handleCancel = useCallback(() => {
    setCollection(() => {
      switch (role) {
        case "fan":
          return { fan_collection: fan_collection || [] };
        case "author":
        default:
          return { author_collection: author_collection || [] };
      }
    });
  }, [role, fan_collection, author_collection]);

  useEffect(() => {
    if (user?.id) {
      switch (role) {
        case "fan":
          dispatch(fetchFanCollection(user.id));
          break;
        case "author":
          dispatch(fetchAuthorCollection(user.id));
          break;
        default:
          break;
      }
    }
    handleCancel();
  }, [dispatch, user, role, handleCancel]);

  const loading = role === "fan" ? fanLoading : authorLoading;

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
          <li>
            {(
              role === "fan"
                ? fan_collection && fan_collection.length > 0
                : author_collection && author_collection.length > 0
            ) ? (
              (() => {
                const item =
                  role === "fan"
                    ? (fan_collection ?? [])[0]
                    : (author_collection ?? [])[0];
                const coverUrl =
                  item?.coverUrl ||
                  "/assets/images/comics-src-collection-no-item.svg";
                const comicHref = item?.slug ? `/comic/${item.slug}` : "#";

                return (
                  <Link href={comicHref}>
                    <Image
                      className="transition duration-300 hover:scale-[0.975] hover:drop-shadow-md hover:delay-150"
                      src={coverUrl}
                      alt={item?.title || "Comic Sample"}
                      width={80}
                      height={133}
                    />
                  </Link>
                );
              })()
            ) : (
              <Image
                className="opacity-50"
                src={"/assets/images/comics-src-collection-no-item.svg"}
                alt={"No Items Found"}
                width={80}
                height={133}
              />
            )}
          </li>
          <li>
            <Link href="/catalog">
              <Image
                className="opacity-50 transition duration-300 hover:scale-[0.975] hover:opacity-100 hover:drop-shadow-md hover:delay-150"
                src={"/assets/images/comics-src-collection-add-item.svg"}
                alt={"Add New Item"}
                width={80}
                height={133}
              ></Image>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
