import Link from "next/link";

export const metadata = {
  title: "Authentication Code Error",
};
export default function AuthCodeError() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 bg-csrcdark py-16">
      <div className="w-[17.3125rem]">
        <h1 className="text-center text-2xl font-bold text-csrcyellow">
          Sorry
        </h1>
        <p className="text-center text-csrclight">
          There was an error with the authentication code. Please try again or
          contact support for assistance.
        </p>
      </div>
      <Link
        href="/"
        className="text-center text-xs text-csrcblue hover:text-csrclight"
      >
        Back to Home
      </Link>
    </main>
  );
}
