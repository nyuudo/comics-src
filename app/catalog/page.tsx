import Image from "next/image";
import { store } from "@/store/store";
import { setStartupComics } from "@/store/searchSlice";
import SearchBar from "@/components/shared/SearchBar";
import PreLoadComics from "@/components/feature/PreLoadComics";
export default async function Catalog() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupComics(data));

  return (
    <main className="flex justify-center gap-4 bg-csrclight p-4 h-[520px]">
      <h1>this is the Main CATALOG Page</h1>
      <h3 className="text-red-500">This is a Public Area</h3>
      <PreLoadComics comics={data} />
      <SearchBar />
    </main>
  );
}
