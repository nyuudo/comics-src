import { createClient } from "@/utils/server";
import Link from "next/link";
import { UserButtonProps } from "@/types/comics-src-types";

export default async function UserButton({ email }: UserButtonProps) {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();

  return (
    <Link
      href={`/dashboard/${data.user?.user_metadata.user_role}/account`}
      className="text-csrcyellow animate-normal hover:text-csrcdark underline decoration-dotted underline-offset-4 transition delay-150 duration-300 hover:delay-150"
    >
      {email}
    </Link>
  );
}
