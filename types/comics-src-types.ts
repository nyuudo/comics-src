import type { Database } from "./database";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export type LogoProps = {
  handleLogoClick: () => void;
};

export type LogInButtonProps = {
  handleLogin: () => void;
};

export type CatalogProductProps = {
  params: { productId: string };
};

export type WebComicsProps = {
  params: { webcomicId: string };
};

export type SignUpProps = {
  params: { role: string };
};

export type SearchState = {
  search: string;
  startupComics: PublishersProducts[];
  authorWebComics: AuthorWebComics[];
  showSearchResults: boolean;
};

export type SignupState = {
  showSignUp: boolean;
};

export type ModalState = {
  isModalOpen: boolean;
};

export type ModalForSignInProps = {
  onClose: () => void;
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
