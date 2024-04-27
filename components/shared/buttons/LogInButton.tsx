import Link from "next/link";

export default function LogInButton() {
  return (
    <Link
      href="/login"
      className="font-bold text-csrcdark transition delay-150 duration-300 hover:text-csrcyellow hover:delay-150"
    >
      LOG IN
    </Link>
  );
}
