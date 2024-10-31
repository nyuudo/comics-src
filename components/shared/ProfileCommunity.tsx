import Image from "next/image";
import Link from "next/link";

export default function ProfileCommunity() {
  return (
    <div id="followers">
      <p className="py-2 font-bold text-csrcdark/50">Following</p>
      <ul className="flex flex-wrap gap-2">
        <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
          <Link href="#">
            <Image
              src="/assets/images/comics-src-profile-image.png"
              alt="Fake Profile Pic"
              width={32}
              height={32}
            ></Image>
          </Link>
        </li>
        <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
          <Link href="#">
            <Image
              src="/assets/images/comics-src-profile-image.png"
              alt="Fake Profile Pic"
              width={32}
              height={32}
            ></Image>
          </Link>
        </li>
        <li className="border mix-blend-multiply grayscale transition duration-1000 ease-in-out clip-followers hover:mix-blend-normal hover:grayscale-0">
          <Link href="#">
            <Image
              src="/assets/images/comics-src-profile-image.png"
              alt="Fake Profile Pic"
              width={32}
              height={32}
            ></Image>
          </Link>
        </li>
      </ul>
    </div>
  );
}
