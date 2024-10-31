import type { Database } from "./database";
import { z } from "zod";

/* Create User Schema */

export const createUserSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
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
    .string({ required_error: "A user email is required" })
    .min(1, "A user email is required")
    .email("Invalid email"),
});

export type TSResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

/* Update Password Schema */

export const updatePasswordSchema = z
  .object({
    password: z
      .string({ required_error: "New password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be less than 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character",
      ),
    passwordConfirm: z
      .string({
        required_error: "Please confirm your new password",
      })
      .min(1, "Please confirm your new password"),
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
