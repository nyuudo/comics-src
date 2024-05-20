"use client";

import { useRef, useEffect } from "react";
import { store } from "@/store/store";
import { setStartupComics } from "@/store/searchSlice";
import type { PublishersProducts } from "@/types/comics-src-types";

function PreLoadComics({ comics }: { comics: PublishersProducts[] }) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      store.dispatch(setStartupComics(comics));
      loaded.current = true;
    }
  }, [comics]);

  return <></>;
}

export default PreLoadComics;
