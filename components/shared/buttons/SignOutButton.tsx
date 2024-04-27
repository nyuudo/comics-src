import Link from "next/link";

export default function SignOutButton() {
  return (
    <Link
      href="#"
      className="font-bold text-csrcdark transition delay-150 duration-300 hover:text-csrcyellow hover:delay-150"
    >
      SIGN OUT
    </Link>
  );
}
