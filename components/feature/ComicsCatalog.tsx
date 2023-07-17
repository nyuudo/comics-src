import { ComicSrcWebComic } from "@/types";

const ComicsCatalog = ({ comics }: { comics: ComicSrcWebComic[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Comic Title</th>
        </tr>
      </thead>
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.title}>
            <td className="text-blue-500">{comic.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComicsCatalog;
