import { createClient } from "@/utils/server";
import Link from "next/link";

export default async function NavBar() {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();

  const links = [
    {
      role: "fan",
      display: ["My Account", "My Collection", "My Community", "Delete"],
    },
    {
      role: "author",
      display: [
        "My Account",
        "My Works",
        "My Collection",
        "My Community",
        "Delete",
      ],
    },
    {
      role: "publisher",
      display: ["My Account", "Publications", "My Community", "Delete"],
    },
  ];

  const userLinks =
    links.find((link) => link.role === data.user?.user_metadata.user_role)
      ?.display || [];

  const transformLinkText = (linkText: string) => {
    if (linkText.startsWith("My ")) {
      return linkText.substring(3);
    }
    return linkText;
  };

  const transformLinkURL = (linkText: string) => {
    if (linkText === "My Works") {
      return "before:content-my_works";
    }
    if (linkText === "My Collection") {
      return "before:content-my_collection";
    }
    if (linkText === "Publications") {
      return "before:content-publications";
    }
    if (linkText === "My Community") {
      return "before:content-my_community";
    }
    if (linkText === "Delete") {
      return "before:content-delete";
    }

    return "before:content-my_account";
  };

  return (
    <nav className="border-b border-dotted border-csrclight/25 py-4 text-xs md:border-b-0 md:border-r md:py-10 md:pr-5">
      <ul className="flex flex-wrap content-start items-start justify-center divide-x divide-y-0 divide-dotted divide-csrclight/25 md:flex-col md:gap-0 md:divide-x-0 md:divide-y">
        {userLinks.map((linkText, index) => (
          <li key={index} className="mb-0 px-2 md:py-2">
            <Link
              href={`/dashboard/${data.user?.user_metadata.user_role}/${transformLinkText(linkText).toLowerCase()}`}
              className={`${transformLinkURL(linkText)} relative my-3 ml-7 flex flex-col items-center gap-4 text-csrclight transition delay-150 duration-300 before:absolute before:-left-7 before:size-6 hover:text-csrcblue hover:before:scale-90 hover:before:opacity-75 hover:before:duration-500 focus:text-csrcblue active:text-csrcblue md:ml-0 md:flex-row`}
            >
              {linkText}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
