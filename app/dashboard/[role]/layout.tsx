import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";
import NavBar from "@/components/shared/NavBar";

export const metadata = { title: "Dashboard" };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <section className="flex flex-col bg-csrcdark bg-linear-to-t from-black/10 xs:px-5 sm:px-10 md:flex-row md:lg:px-15 xl:px-20">
      <NavBar />
      {children}
    </section>
  );
}
