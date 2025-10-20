import { redirect } from "next/navigation";
import { createClient } from "@/utils/server";
import type { SignUpProps } from "@/types/comics-src-types";
import AuthSignUp from "@/components/feature/AuthSignUp";
import Link from "next/link";

export const metadata = {
  title: "Sign-Up",
};

export const dynamicParams = false;
export async function generateStaticParams() {
  const roles = ["fan", "author", "publisher"];
  return roles.map((role) => {
    return { role };
  });
}
export default async function SignUp({ params }: SignUpProps) {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();
  if (!error && data?.user) {
    redirect(`/dashboard/${data.user?.user_metadata.user_role}/account`);
  }
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-69.25">
        <h1 className="text-center text-2xl font-bold">
          Create an Account as {params.role.toUpperCase()}
        </h1>
        <AuthSignUp userRole={params.role} />
        <div className="flex flex-col gap-3 py-4">
          <Link
            href="/login"
            className="text-csrcblue hover:text-csrcdark text-center text-xs underline"
          >
            Already have an account? Please, Log-In!
          </Link>
        </div>
      </div>
    </main>
  );
}
