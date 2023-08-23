import Link from "next/link";
export default function LogInButton() {
  return (
    <Link className="font-bold" href="/login">
      LOG IN
    </Link>
  );
}

/* 
export default function LogInButton() {
  return <Link href="/api/auth/signin">LOG IN</Link>;
} */
