import type { Database } from "./database";

export type SearchState = {
  search: string;
  startupComics: PublishersProducts[];
  showSearchResults: boolean;
};

export type ModalState = {
  isModalOpen: boolean;
};

export type Author = Database["public"]["Tables"]["Author"]["Row"];

export type AuthorWebComics =
  Database["public"]["Tables"]["Authors WebComics"]["Row"];

export type Fan = Database["public"]["Tables"]["Fan"]["Row"];

export type FansCollection =
  Database["public"]["Tables"]["Fans Collection"]["Row"];

export type Publisher = Database["public"]["Tables"]["Publisher"]["Row"];

export type PublishersProducts =
  Database["public"]["Tables"]["Publishers Product"]["Row"];
