import type { PublishersProducts } from "@/types/comics-src-types";
const ComicsCatalog = ({ comics }: { comics: PublishersProducts[] }) => {
  return (
    <table className="flex">
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.product_id}>
            <td className="text-csrcdark">{comic.product_title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComicsCatalog;
