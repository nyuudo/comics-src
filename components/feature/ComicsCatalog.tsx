import { ComicSrcWebComic } from "@/types/comics-src-types";

const ComicsCatalog = ({ comics }: { comics: ComicSrcWebComic[] }) => {
  return (
    <table className="flex">
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.title}>
            <td className="text-csrcdark">{comic.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComicsCatalog;
