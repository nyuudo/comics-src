import SignUpButton from "../shared/buttons/SignUpButton";
import LogInButton from "../shared/buttons/LogInButton";
import LogOutButton from "../shared/buttons/LogOutButton";
import getUserSession from "@/lib/getUserSession";

export default async function AuthButtons() {
  const { data } = await getUserSession();
  return (
    <div className="order-1 flex items-stretch justify-evenly md:order-2 md:items-center md:justify-between md:gap-4">
      {data.session ? (
        <LogOutButton />
      ) : (
        <>
          {" "}
          <SignUpButton /> <LogInButton />
        </>
      )}
    </div>
  );
}
