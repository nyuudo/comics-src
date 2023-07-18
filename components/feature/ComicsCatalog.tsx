import { ComicSrcWebComic } from "@/types";

const ComicsCatalog = ({ comics }: { comics: ComicSrcWebComic[] }) => {
  return (
    <table className="flex">
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.title}>
            <td className="text-csrcblue">{comic.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComicsCatalog;
