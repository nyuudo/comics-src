import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";
import AccountForm from "@/components/feature/AccountForm";

export default async function AuthorAccount() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AccountForm session={session} />;
}
/* export default function AuthorAccount() {
  return (
    <main className="flex justify-center gap-4 bg-csrcyelow p-4 h-[520px]">
      <h1>this is Main Author Account Page</h1>
      <h3 className="text-red-500">
        this content is available by private access
      </h3>
    </main>
  );
} */
