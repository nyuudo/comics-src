import ComicsCatalog from "@/components/feature/ComicsCatalog";
export default async function Comics() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  return (
    <main>
      <ComicsCatalog comics={data} />
    </main>
  );
}
