import { redirect, notFound } from "next/navigation";
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
  // unwrap params because Next may provide params as a Promise
  const { role } = (await params) as { role?: string };

  // guard against missing/invalid role
  const allowedRoles = ["fan", "author", "publisher"];
  if (!role || !allowedRoles.includes(role)) {
    // show 404 for unknown roles (you could alternatively redirect to a default)
    return notFound();
  }

  // get supabase client and check current user
  try {
    const supabase = await createClient();
    // some createClient implementations return a promise that resolves to client,
    // others return the client directly — awaiting above is safe either way.
    if (supabase?.auth?.getUser) {
      const { data, error } = await supabase.auth.getUser();
      if (!error && data?.user) {
        // user already logged in: redirect to their dashboard using their role
        const userRole = data.user.user_metadata?.user_role ?? data.user?.user_metadata;
        // guard the extracted role
        if (userRole && allowedRoles.includes(userRole)) {
          return redirect(`/dashboard/${userRole}/account`);
        } else {
          // fallback redirect if stored role is missing/invalid
          return redirect(`/dashboard/fan/account`);
        }
      }
    }
  } catch (err) {
    // if client check fails, fall through to render the sign-up page.
    // Optionally you can log the error server-side.
    // console.error("supabase getUser error", err);
  }

  const roleUpper = role.toUpperCase();

  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-69.25">
        <h1 className="text-center text-2xl font-bold">
          Create an Account as {roleUpper}
        </h1>
        <AuthSignUp userRole={role} />
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