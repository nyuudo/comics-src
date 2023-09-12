import AuthForm from "@/components/feature/AuthForm";

export const metadata = {
  title: "LogIn",
};
export default function LogIn() {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="font-semibold text-2xl">Log-In</h1>
        <p className="text-csrcdark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <AuthForm />
      </div>
    </main>
  );
}
