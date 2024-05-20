import Link from "next/link";
import createSupabaseServerClient from "@/database/server";

export default function LogOutButton() {
  const logoutAction = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  };

  return (
    <form action={logoutAction}>
      <Link
        href="/"
        className="font-bold text-csrcdark transition delay-150 duration-300 hover:text-csrcyellow hover:delay-150"
      >
        LOG OUT
      </Link>
    </form>
  );
}
