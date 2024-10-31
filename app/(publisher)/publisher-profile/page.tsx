import Image from "next/image";
import ProfileSummary from "@/components/shared/ProfileSummary";
import ProfileBio from "@/components/shared/ProfileBio";
import ProfilePublications from "@/components/shared/ProfilePublications";
import ProfileCommunity from "@/components/shared/ProfileCommunity";

export const metadata = {
  title: "Publisher Profile",
};

export default async function PublisherProfile() {
  return (
    <main className="bg-csrcblue px-5 py-16 sm:px-10 md:lg:px-[3.75rem] xl:px-20">
      <Image
        className=""
        src="./assets/images/comics-src-profile-publisher.svg"
        width={150}
        height={50}
        alt="Publisher Logo"
      />
      <div className="flex max-w-xs flex-col gap-4">
        <p className="font-bold text-csrcyellow">Username</p>
        <ProfileSummary />
        <ProfileBio />
        <ProfilePublications />
        <ProfileCommunity />
      </div>
    </main>
  );
}
