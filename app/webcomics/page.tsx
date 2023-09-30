import WebComicIssue from "./components/WebComicIssue";

export const metadata = {
  title: "WebComics",
};
export default function WebComics() {
  return (
    <main className=" selection:bg-csrcblue selection:text-white">
      <WebComicIssue />
    </main>
  );
}
