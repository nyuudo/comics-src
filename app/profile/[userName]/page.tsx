import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import getUserSession from "@/lib/getUserSession";
import type { ProfileProps } from "@/types/comics-src-types";
import getUserNames from "@/lib/getUserNames";
import getPublishersProductId from "@/lib/getPublishersProductId";
import FollowButton from "@/components/shared/buttons/FollowButton";
import Community from "@/components/feature/Community";

/**
 * Notes:
 * - Next may supply `params` as a Promise. We `await params` before using it.
 * - We validate and guard early (call `notFound()` when the username is missing or no matching profile).
 * - We defensively parse collection IDs to numbers and skip invalid entries so no NaN is passed to downstream fetches.
 */

export async function generateMetadata({
  params,
}: ProfileProps): Promise<Metadata> {
  // unwrap params (params may be a Promise)
  const { userName } = (await params) as { userName?: string };

  if (!userName) {
    // No username provided → 404 (this throws internally)
    return notFound() as unknown as Metadata;
  }

  const decodedUserName = decodeURIComponent(userName);

  // load profile data (guard any runtime errors)
  let fan;
  let author;
  try {
    const resp = await getUserNames(decodedUserName);
    fan = resp?.fan;
    author = resp?.author;
  } catch (err) {
    // treat lookup failures as not found
    return notFound() as unknown as Metadata;
  }

  const userNameProfile = fan?.fan_username || author?.author_username;

  if (!userNameProfile) {
    return notFound() as unknown as Metadata;
  }

  return {
    title: `${userNameProfile}`,
    description: `This is the profile page for ${userNameProfile}.`,
  };
}

export default async function Profile({ params }: ProfileProps) {
  // unwrap params safely
  const { userName } = (await params) as { userName?: string };

  if (!userName) {
    return notFound();
  }

  const decodedUserName = decodeURIComponent(userName);

  // load profile (fan or author)
  let fan;
  let author;
  try {
    const resp = await getUserNames(decodedUserName);
    fan = resp?.fan;
    author = resp?.author;
  } catch (err) {
    // If the lookup failed, show 404
    return notFound();
  }

  const profile = fan || author;
  if (!profile) {
    return (
      <div className="text-csrcdanger">User {decodedUserName} not found.</div>
    );
  }

  // session info (may be undefined)
  const { data } = await getUserSession();
  const followerId = data?.user?.id;

  const isFan = Boolean(fan);
  const followedId = isFan ? fan?.fan_id : author?.author_id;

  // Get collection IDs (may be array of strings or numbers)
  const collectionIds = (isFan ? fan?.fan_collection : author?.author_collection) ?? [];

  // Parse collection ids to numbers, keeping only positive finite integers
  const productIds = collectionIds
    .map((id) => Number(id))
    .filter((n) => Number.isFinite(n) && n > 0);

  // Fetch products for each id. If no productIds, short-circuit to empty array.
  const products = productIds.length
    ? await Promise.all(productIds.map((id) => getPublishersProductId(id)))
    : [];

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
          />
          {followerId && followedId && (
            <FollowButton followerId={followerId} followedId={followedId} />
          )}
        </div>

        <div className="flex max-w-64 flex-col gap-4">
          <h1 className="text-csrcyellow text-3xl">
            {isFan ? fan?.fan_username : author?.author_username}
          </h1>
          <h2 className="text-csrclight/50 text-2xl">Bio</h2>
          <p className="text-csrclight">
            {isFan ? fan?.fan_bio : author?.author_bio}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 md:items-start md:gap-4 md:self-start">
          <h3 className="text-csrclight/50 text-2xl">Collection</h3>
          <ul className="grid grid-flow-row grid-cols-3 gap-8 lg:grid-cols-4">
            {products.length > 0 ? (
              products.map((product, index) =>
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
                  <li key={`no-item-${index}`}>
                    <span>No items currently</span>
                  </li>
                ),
              )
            ) : (
              // empty collection fallback
              <li>
                <span>No items currently</span>
              </li>
            )}
          </ul>
        </div>
      </section>
      <Community />
    </main>
  );
}