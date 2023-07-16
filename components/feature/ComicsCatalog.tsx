import { ComicSrcWebComic } from "@/types";

const ComicsCatalog = ({ comics }: { comics: ComicSrcWebComic[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {comics.map((comic) => (
          <tr key={comic.title}>
            <td>{comic.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComicsCatalog;
