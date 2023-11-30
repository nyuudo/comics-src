import Link from "next/link";

export default function SignOutButton() {
  return (
    <Link
      href="#"
      className="font-bold text-csrcdark transition duration-300 delay-150 hover:delay-150 hover:text-csrcyellow"
    >
      SIGN OUT
    </Link>
  );
}
