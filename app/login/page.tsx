import AuthLogIn from "@/components/feature/AuthLogIn";

export const metadata = {
  title: "LogIn",
};
export default function LogIn() {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="font-semibold text-2xl">Log-In</h1>
        <p className="text-csrcdark">Welcome back to Comics/src</p>
        <AuthLogIn />
      </div>
    </main>
  );
}
