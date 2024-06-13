export const metadata = {
  title: "Confirmation",
};

export default function Confirm() {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="w-[17.3125rem]">
        <h1 className="text-center text-2xl font-bold">Password Reset:</h1>
        <p className="text-center text-csrcdark">
          A link has been sent to your email
        </p>
      </div>
    </main>
  );
}
