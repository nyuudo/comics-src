export type ComicSrcWebComic = {
  id: string;
  title: string;
  author: string;
  genre: string[];
  year: number;
  publisher: string;
  coverImage: string;
};

export type SearchState = {
  search: string;
  author?: string;
  publisher?: string;
  startupComics: ComicSrcWebComic[];
};

export type ModalState = {
  isModalOpen: boolean;
};
