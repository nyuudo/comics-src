"use client";
import { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import {
  addToFanCollection,
  resetFanCollectionStatus,
} from "@/store/addToFanCollection";
import {
  addToAuthorCollection,
  resetAuthorCollectionStatus,
} from "@/store/addToAuthorCollection";
import type { AddButtonProps } from "@/types/comics-src-types";
import { RootState, AppDispatch } from "@/store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function AddButton({ productId, userId, role }: AddButtonProps) {
  const dispatch = useAppDispatch();

  const collectionState = useTypedSelector((state) =>
    role === "fan" ? state.fanCollection : state.authorCollection,
  );
  const { loading, error, success, alreadyExists } = collectionState;

  const isLoggedIn = Boolean(userId);

  useEffect(() => {
    if (success || error || alreadyExists) {
      setTimeout(() => {
        if (role === "fan") {
          dispatch(resetFanCollectionStatus());
        } else {
          dispatch(resetAuthorCollectionStatus());
        }
      }, 2000);
    }
  }, [success, error, alreadyExists, dispatch, role]);

  const handleAdd = () => {
    if (role === "fan") {
      dispatch(addToFanCollection({ productId, userId }));
    } else {
      dispatch(addToAuthorCollection({ productId, userId }));
    }
  };

  return (
    <button
      onClick={handleAdd}
      disabled={loading || !isLoggedIn}
      className="bg-csrcblue hover:bg-csrcdark disabled:bg-csrcdark/75 max-w-48 rounded px-2 py-2 text-sm font-bold text-white transition delay-150 duration-300 ease-in-out disabled:cursor-not-allowed"
      title={!isLoggedIn ? "ADD ITEM" : ""}
    >
      {!isLoggedIn
        ? "LOGIN TO ADD ITEM"
        : loading
          ? "ADDING..."
          : alreadyExists
            ? "ALREADY ADDED"
            : success
              ? "ADDED!"
              : "ADD TO COLLECTION"}
      {error && <span className="text-csrcdanger ml-2">{error}</span>}
    </button>
  );
}
