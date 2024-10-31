import Image from "next/image";
import ProfileSummary from "@/components/shared/ProfileSummary";
import ProfileBio from "@/components/shared/ProfileBio";
import ProfileCollection from "@/components/shared/ProfileCollection";
import ProfileCommunity from "@/components/shared/ProfileCommunity";

export const metadata = {
  title: "Fan Profile",
};

export default async function FanProfile() {
  return (
    <main className="bg-csrcblue px-5 py-16 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <Image
        className="clip-profile"
        src="/assets/images/comics-src-profile-image.png"
        width={50}
        height={50}
        alt="Fan Profile Image"
      />
      <div className="flex max-w-xs flex-col gap-4">
        <p className="font-bold text-csrcyellow">Username</p>
        <ProfileSummary />
        <ProfileBio />
        <ProfileCollection />
        <ProfileCommunity />
      </div>
    </main>
  );
}
