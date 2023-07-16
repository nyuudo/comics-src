export default async function Catalog() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  return (
    <>
      <h1 className="flex flex-col items-center justify-between">
        this is the Main CATALOG Page
      </h1>
      <main>{JSON.stringify(data)}</main>
    </>
  );
}
