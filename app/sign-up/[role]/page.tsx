import type { SignUpProps } from "@/types/comics-src-types";
import AuthSignUp from "@/components/feature/AuthSignUp";

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
        <h1 className="text-2xl font-semibold">
          Create Account as {params.role.toUpperCase()}
        </h1>
        <p className="text-csrcdark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <AuthSignUp />
      </div>
    </main>
  );
};

export default SignUp;
