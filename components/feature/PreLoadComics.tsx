"use client";

import { useRef } from "react";
import { store } from "@/store/store";
import { setStartupComics } from "@/store/searchSlice";
import { ComicSrcWebComic } from "@/types";

function PreLoadComics({ comics }: { comics: ComicSrcWebComic[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupComics(comics));
    loaded.current = true;
  }
  return null;
}

export default PreLoadComics;