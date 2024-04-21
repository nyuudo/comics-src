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
const SignUp = ({ params }: SignUpProps) => {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="text-2xl font-bold text-center">
          Create an Account as {params.role.toUpperCase()}
        </h1>
        <AuthSignUp />
        <div className="flex flex-col py-4 gap-3">
          <Link
            href="/login"
            className="underline text-xs text-center text-csrcblue hover:text-csrcdark"
          >
            Already have an account? Please, Log-In!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
