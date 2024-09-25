import { createClient } from "@/utils/server";
import Link from "next/link";
import { UserButtonProps } from "@/types/comics-src-types";

export default async function UserButton({ email }: UserButtonProps) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <Link
      href={`/dashboard/${data.user?.user_metadata.user_role}/account`}
      className="animate-jump text-csrcyellow underline decoration-dotted underline-offset-4 transition delay-150 duration-300 animate-delay-[2000ms] animate-normal animate-duration-1000 animate-fill-both animate-once animate-ease-out hover:text-csrcdark hover:delay-150"
    >
      {email}
    </Link>
  );
}
