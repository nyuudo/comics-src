import UserButton from "../shared/buttons/UserButton";
import AuthLogOut from "./AuthLogOut";
import SignUpButton from "../shared/buttons/SignUpButton";
import LogInButton from "../shared/buttons/LogInButton";
import getUserSession from "@/lib/getUserSession";

export default async function AuthButtons() {
  const { data } = await getUserSession();
  return (
    <div className="order-1 flex items-stretch justify-evenly md:order-2 md:items-center md:justify-between md:gap-4">
      {data.user ? (
        <>
          <UserButton email={data.user.email} /> <AuthLogOut />
        </>
      ) : (
        <>
          <SignUpButton /> <LogInButton />
        </>
      )}
    </div>
  );
}
