import Fan from "@/app/(fan)/fan/page";
import type { Database } from "./database";
import { z } from "zod";

/* Create User Schema */

export const createUserSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be less than 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character",
      ),
    passwordConfirm: z.string().min(1, "Please confirm your password"),
    userRole: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export type TSCreateUserSchema = z.infer<typeof createUserSchema>;

export type AuthSignUpProps = {
  userRole: string;
};

/* Log-in Schema  */

export const logInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type TSLogInSchema = z.infer<typeof logInSchema>;

/* Reset Password Schema */

export const resetPasswordSchema = z.object({
  email: z.string().min(1, "A user email is required").email("Invalid email"),
});

export type TSResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

/* Update Password Schema */

export const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be less than 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character",
      ),
    passwordConfirm: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export type TSUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;

/* Miscellaneous Types */

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

export type MessageProps = {
  params: { message: string };
};

export type ProfileProps = {
  params: { userName: string };
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

export type UserButtonProps = {
  email: string | undefined;
};

/* Database Related types */

export type Author = Database["public"]["Tables"]["Author"]["Row"];

export type AuthorWebComics =
  Database["public"]["Tables"]["Authors WebComics"]["Row"];

export type Fan = Database["public"]["Tables"]["Fan"]["Row"];

export type FansCollection =
  Database["public"]["Tables"]["Fans Collection"]["Row"];

export type Publisher = Database["public"]["Tables"]["Publisher"]["Row"];

export type PublishersProducts =
  Database["public"]["Tables"]["Publishers Product"]["Row"];

/* Thunks Related types */

export type FanProfileState = {
  fan_bio: string | null;
  fan_profileImage: string | null;
  fan_socialmedia: string | null;
  fan_url: string | null;
  fan_username: string | null;
  loading: boolean;
  error: string | null;
};

export type AuthorProfileState = {
  author_bio: string | null;
  author_profileImage: string | null;
  author_socialmedia: string | null;
  author_url: string | null;
  author_username: string | null;
  loading: boolean;
  error: string | null;
};

export type PublisherProfileState = {
  publisher_bio: string | null;
  publisher_name: string | null;
  publisher_profileImage: string | null;
  publisher_socialmedia: string | null;
  publisher_url: string | null;
  loading: boolean;
  error: string | null;
};

export type FanProfile = {
  fan_bio: string;
  fan_socialmedia: string;
  fan_url: string;
  fan_username: string;
  fan_profileImage: string;
};

export type AuthorProfile = {
  author_bio: string;
  author_socialmedia: string;
  author_url: string;
  author_username: string;
  author_profileImage: string;
};

export type PublisherProfile = {
  publisher_bio: string;
  publisher_socialmedia: string;
  publisher_url: string;
  publisher_name: string;
  publisher_profileImage: string;
};

export type AvatarState = {
  url: string | null;
  loading: boolean;
  error: string | null;
};

export type EditedProfile = FanProfile | AuthorProfile | PublisherProfile;

export type CommunityState = {
  followers: string[] | null;
  loading: boolean;
  error: string | null;
};

export type FanCollectionState = {
  fan_collection: string[] | null;
  loading: boolean;
  error: string | null;
};

export type AuthorCollectionState = {
  author_collection: string[] | null;
  loading: boolean;
  error: string | null;
};

export type FanCollection = {
  fan_collection: string[];
};

export type AuthorCollection = {
  author_collection: string[];
};

export type EditedCollection = FanCollection | AuthorCollection;

export type AddButtonProps = {
  productId: number;
  userId: string | undefined;
  role: "fan" | "author";
};

export type CollectionResponse = {
  fan_collection?: string[] | null;
  author_collection?: string[] | null;
};

export type LikedByCommunityState = {
  avatars: string[] | null;
  loading: boolean;
  error: string | null;
};

export type CommunityUser = {
  username: string;
  profileImage: string | null;
};

export type CommunityUsersState = {
  users: CommunityUser[];
  loading: boolean;
  error: string | null;
};
