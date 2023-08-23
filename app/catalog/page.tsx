import client from "@/database/client";

export const metadata = {
  title: "Catalog",
};
export default async function Catalog() {
  const { data } = await client.from("Publishers Product").select();

  return (
    <main className="flex flex-col justify-center gap-4 bg-csrclight p-4 h-[520px]">
      <h1>this is the Main CATALOG Page</h1>
      <h3 className="text-red-500">This is a Public Area</h3>
      <p>{JSON.stringify(data, null, 2)}</p>
    </main>
  );
}
