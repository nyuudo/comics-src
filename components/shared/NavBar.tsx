import { createClient } from "@/utils/server";
import Link from "next/link";

export default async function NavBar() {
  const supabase = createClient();
  const { data, error } = await (await supabase).auth.getUser();

  const icons = {
    "My Account": "/assets/icons/comics-src-dashboard-00.svg",
    "My Works": "/assets/icons/comics-src-dashboard-01.svg",
    "My Collection": "/assets/icons/comics-src-dashboard-02.svg",
    Publications: "/assets/icons/comics-src-dashboard-03.svg",
    "My Community": "/assets/icons/comics-src-dashboard-04.svg",
    Delete: "/assets/icons/comics-src-dashboard-05.svg",
  };

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
    <nav className="border-csrclight/25 border-b border-dotted py-4 text-xs md:border-r md:border-b-0 md:py-10 md:pr-5">
      <ul className="divide-csrclight/25 flex content-center items-center justify-center divide-x-0 divide-y-0 md:flex-col md:flex-wrap md:content-start md:items-start md:gap-0 md:divide-x-0 md:divide-y md:divide-dotted">
        {userLinks.map((linkText, index) => (
          <li key={index} className="md:px-2 md:py-2">
            <Link
              href={`/dashboard/${data.user?.user_metadata.user_role}/${transformLinkText(linkText).toLowerCase()}`}
              className={`${transformLinkURL(linkText)} text-csrclight md:hover:text-csrcblue md:focus:text-csrcblue md:active:text-csrcblue relative mx-3 my-3 flex flex-col items-center gap-4 transition delay-150 duration-300 before:absolute before:-left-7 before:size-6 hover:scale-125 hover:before:scale-90 hover:before:opacity-75 hover:before:duration-500 focus:scale-125 focus:opacity-50 active:scale-125 active:opacity-50 md:ml-0 md:flex-row md:hover:scale-100 md:focus:scale-100 md:focus:opacity-100 md:active:scale-100 md:active:opacity-100`}
            >
              <span className="md:hidden">
                <img
                  src={icons[linkText as keyof typeof icons]}
                  alt={`${linkText} icon`}
                  className="h-6 w-6"
                />
              </span>
              <span className="hidden md:block">{linkText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
