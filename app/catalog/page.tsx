import Products from "./components/Products";
import FeatureProduct from "./components/FeatureProduct";

export const metadata = {
  title: "Catalog",
};

export default async function Catalog() {
  return (
    <main className=" selection:bg-csrcblue selection:text-white">
      <FeatureProduct />
      <Products />
    </main>
  );
}
