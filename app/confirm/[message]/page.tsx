import type { MessageProps } from "@/types/comics-src-types";

export const metadata = {
  title: "Confirmation",
};

export const dynamicParams = false;
export async function generateStaticParams() {
  const messages = ["password-reset", "confirm-your-email"];
  return messages.map((message) => {
    return { message };
  });
}

export default function Confirm({ params }: MessageProps) {
  return (
    <main className="flex items-center justify-center py-16">
      <div className="my-20 w-69.25">
        <h1 className="text-center text-2xl font-bold text-csrcblue">
          {params.message.toUpperCase().replace(/-/g, " ")}:
        </h1>
        <p className="text-center text-csrcdark">
          A link has been sent to your email.
        </p>
        <p className="text-center text-xs text-slate-400">
          (Please, check also your spam folder)
        </p>
      </div>
    </main>
  );
}
