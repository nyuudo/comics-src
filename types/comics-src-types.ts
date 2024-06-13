import type { Database } from "./database";
import { z } from "zod";

/* Create User Schema */
export const createUserSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(1, "Name is required"),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    photo: z.string().optional(),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .max(32, "Password must be less than 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character",
      ),
    passwordConfirm: z
      .string({
        required_error: "Please confirm your password",
      })
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export type TSCreateUserSchema = z.infer<typeof createUserSchema>;

/* Log-in Schema  */
export const logInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
});

export type TSLogInSchema = z.infer<typeof logInSchema>;

/* Reset Password Schema */

export const resetPasswordSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
});

export type TSResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

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
