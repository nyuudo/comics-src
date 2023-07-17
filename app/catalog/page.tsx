import ComicsCatalog from "@/components/feature/ComicsCatalog";
import SearchBar from "@/components/shared/SearchBar";
import Providers from "@/components/feature/Provider";
import Preloader from "@/components/feature/Preloader";

import { store } from "@/store/store";
import { setStartupComics } from "@/store/searchSlice";
export default async function Catalog() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupComics(data));

  return (
    <>
      <h1 className="flex flex-col items-center justify-between">
        this is the Main CATALOG Page
      </h1>
      <main>
        <Preloader comics={data} />
        <Providers>
          <SearchBar />
        </Providers>
      </main>
    </>
  );
}
