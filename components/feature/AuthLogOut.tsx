"use client";

import { logOutUser } from "@/lib/authFunctions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function AuthLogOut() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOutUser();
      toast.success("Successfully Logged Out");
      router.push("/");
    } catch (error) {
      toast.error("Failed to Log Out");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="font-bold text-csrcdark transition delay-150 duration-300 hover:text-csrcyellow hover:delay-150"
    >
      LOG OUT
    </button>
  );
}
