import Link from "next/link";

export default function LogInButton() {
  return (
    <Link
      href="/login"
      className="font-bold text-csrcdark transition duration-300 delay-150 hover:delay-150 hover:text-csrcyellow"
    >
      LOG IN
    </Link>
  );
}
