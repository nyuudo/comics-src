import Image from "next/image";
import type { Metadata } from "next";
import type { ProfileProps } from "@/types/comics-src-types";
import getUserNames from "@/lib/getUserNames";
import getPublishersProductId from "@/lib/getPublishersProductId";
import FollowButton from "@/components/shared/buttons/FollowButton";
import Community from "@/components/feature/Community";

export async function generateMetadata({
  params,
}: ProfileProps): Promise<Metadata> {
  const { userName } = params;
  const decodedUserName = decodeURIComponent(userName);
  const { fan, author } = await getUserNames(decodedUserName);

  const userNameProfile = fan?.fan_username || author?.author_username;

  if (!userNameProfile) {
    throw new Error("No matching username found");
  }

  return {
    title: `${userNameProfile}`,
    description: `This is the profile page for ${userNameProfile}.`,
  };
}

export default async function Profile({ params }: ProfileProps) {
  const { userName } = params;
  const decodedUserName = decodeURIComponent(userName);
  const { fan, author } = await getUserNames(decodedUserName);
  const profile = fan || author;

  if (!profile) {
    return (
      <div className="text-csrcdanger">User {decodedUserName} not found.</div>
    );
  }

  const isFan = fan;

  const collectionIds =
    (isFan ? fan?.fan_collection : author?.author_collection) ?? [];
  const productIds = collectionIds.map((id) => Number(id)).filter(Boolean);

  const products = await Promise.all(
    productIds.map((id) => getPublishersProductId(id)),
  );

  return (
    <main>
      <section className="bg-csrcdark flex flex-col items-center gap-12 px-5 py-10 sm:px-10 md:flex-row md:items-start md:gap-5 md:lg:px-15 xl:px-20">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="clip-followers min-h-32 min-w-32"
            src={
              isFan
                ? fan?.fan_profileImage ||
                  "/assets/images/comics-src-profile-image.png"
                : author?.author_profileImage ||
                  "/assets/images/comics-src-profile-image.png"
            }
            alt={`${isFan ? fan?.fan_username : author?.author_username}`}
            width={128}
            height={128}
          ></Image>
          <FollowButton />
        </div>
        <div className="flex max-w-64 flex-col gap-4">
          <h1 className="text-csrcyellow text-3xl">
            {isFan ? fan?.fan_username : author?.author_username}
          </h1>
          <h2 className="text-csrclight/50 text-2xl">Bio</h2>
          <p className="text-csrclight">
            {isFan ? fan.fan_bio : author?.author_bio}
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 md:items-start md:gap-4 md:self-start">
          <h3 className="text-csrclight/50 text-2xl">Collection</h3>
          <ul className="grid grid-flow-row grid-cols-3 gap-8 lg:grid-cols-4">
            {products.map((product, index) =>
              product && product[0] ? (
                <li key={product[0].product_id}>
                  <Image
                    src={
                      product[0].product_cover ||
                      "/assets/images/comics-src-collection-no-item.svg"
                    }
                    alt={product[0].product_title}
                    width={80}
                    height={133}
                  />
                </li>
              ) : (
                <li key={index}>
                  <span>No items currently</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
      <Community />
    </main>
  );
}
