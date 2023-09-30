import Products from "./components/Products";
import FeatureProduct from "./components/FeatureProduct";
import WebComicIssue from "../webcomics/components/WebComicIssue";

export const metadata = {
  title: "Catalog",
};

export default function Catalog() {
  return (
    <main className=" selection:bg-csrcblue selection:text-white">
      <FeatureProduct />
      <Products />
      <WebComicIssue />
    </main>
  );
}
