import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  logOutUser,
  resetPassword,
  updatePassword,
} from "@/lib/authFunctions";
import { createClient } from "@/utils/server";
import type {
  TSCreateUserSchema,
  TSLogInSchema,
  TSResetPasswordSchema,
  TSUpdatePasswordSchema,
} from "@/types/comics-src-types";

// Mock Next.js functions
vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

// Mock the Supabase client
vi.mock("@/utils/server", () => ({
  createClient: vi.fn(),
}));

describe("Authentication Functions", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ========================
  // SIGN UP TESTS
  // ========================
  describe("signUpWithEmailAndPassword", () => {
    it("should successfully sign up a user with valid data", async () => {
      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const signUpData: TSCreateUserSchema = {
        email: "newuser@example.com",
        password: "SecurePass123!",
        passwordConfirm: "SecurePass123!",
        userRole: "fan",
      };

      await signUpWithEmailAndPassword(signUpData);

      // Verify Supabase was called with correct data
      expect(mockSupabase.auth.signUp).toHaveBeenCalledWith({
        email: "newuser@example.com",
        password: "SecurePass123!",
        options: { data: { user_role: "fan" } },
      });

      // Verify revalidatePath was called
      expect(revalidatePath).toHaveBeenCalledWith("/", "layout");

      // Verify redirect to email confirmation page
      expect(redirect).toHaveBeenCalledWith("/confirm/confirm-your-email");
    });

    it("should redirect to error page if sign up fails", async () => {
      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({
            error: { message: "Email already exists" },
          }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const signUpData: TSCreateUserSchema = {
        email: "existing@example.com",
        password: "SecurePass123!",
        passwordConfirm: "SecurePass123!",
        userRole: "author",
      };

      await signUpWithEmailAndPassword(signUpData);

      // Verify redirect to error page when signup fails
      expect(redirect).toHaveBeenCalledWith("/error");
    });

    it("should pass the correct user role to Supabase", async () => {
      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const roles = ["fan", "author", "publisher"];

      for (const role of roles) {
        vi.clearAllMocks();

        const signUpData: TSCreateUserSchema = {
          email: "user@example.com",
          password: "SecurePass123!",
          passwordConfirm: "SecurePass123!",
          userRole: role,
        };

        await signUpWithEmailAndPassword(signUpData);

        expect(mockSupabase.auth.signUp).toHaveBeenCalledWith(
          expect.objectContaining({
            options: { data: { user_role: role } },
          }),
        );
      }
    });
  });

  // ========================
  // SIGN IN TESTS
  // ========================
  describe("signInWithEmailAndPassword", () => {
    it("should successfully sign in a user with valid credentials", async () => {
      const mockSupabase = {
        auth: {
          signInWithPassword: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const signInData: TSLogInSchema = {
        email: "user@example.com",
        password: "SecurePass123!",
      };

      await signInWithEmailAndPassword(signInData);

      expect(mockSupabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: "user@example.com",
        password: "SecurePass123!",
      });

      expect(revalidatePath).toHaveBeenCalledWith("/", "layout");
      expect(redirect).toHaveBeenCalledWith("/");
    });

    it("should redirect to error page if sign in fails", async () => {
      const mockSupabase = {
        auth: {
          signInWithPassword: vi.fn().mockResolvedValue({
            error: { message: "Invalid credentials" },
          }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const signInData: TSLogInSchema = {
        email: "user@example.com",
        password: "WrongPassword123!",
      };

      await signInWithEmailAndPassword(signInData);

      expect(redirect).toHaveBeenCalledWith("/error");
    });

    it("should pass exact email and password to Supabase", async () => {
      const mockSupabase = {
        auth: {
          signInWithPassword: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const signInData: TSLogInSchema = {
        email: "test@example.com",
        password: "TestPass123!",
      };

      await signInWithEmailAndPassword(signInData);

      expect(mockSupabase.auth.signInWithPassword).toHaveBeenCalledWith(
        signInData,
      );
    });
  });

  // ========================
  // SIGN OUT TESTS
  // ========================
  describe("logOutUser", () => {
    it("should successfully log out a user", async () => {
      const mockSupabase = {
        auth: {
          signOut: vi.fn().mockResolvedValue({ success: true }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const result = await logOutUser();

      expect(mockSupabase.auth.signOut).toHaveBeenCalled();
      expect(result).toEqual({ success: true });
    });

    it("should handle logout errors gracefully", async () => {
      const mockSupabase = {
        auth: {
          signOut: vi.fn().mockRejectedValue(new Error("Network error")),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const result = await logOutUser();

      expect(result).toHaveProperty("error");
      expect(result.error).toBeInstanceOf(Error);
    });

    it("should not redirect on logout (unlike other auth functions)", async () => {
      const mockSupabase = {
        auth: {
          signOut: vi.fn().mockResolvedValue({ success: true }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      await logOutUser();

      // Logout doesn't use redirect, unlike other functions
      expect(redirect).not.toHaveBeenCalled();
    });
  });

  // ========================
  // RESET PASSWORD TESTS
  // ========================
  describe("resetPassword", () => {
    it("should send password reset email", async () => {
      const mockSupabase = {
        auth: {
          resetPasswordForEmail: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const resetData: TSResetPasswordSchema = {
        email: "user@example.com",
      };

      await resetPassword(resetData);

      expect(mockSupabase.auth.resetPasswordForEmail).toHaveBeenCalledWith(
        "user@example.com",
      );

      expect(revalidatePath).toHaveBeenCalledWith("/", "layout");
      expect(redirect).toHaveBeenCalledWith("/confirm/password-reset");
    });

    it("should redirect to error page if reset password fails", async () => {
      const mockSupabase = {
        auth: {
          resetPasswordForEmail: vi.fn().mockResolvedValue({
            error: { message: "Email not found" },
          }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const resetData: TSResetPasswordSchema = {
        email: "nonexistent@example.com",
      };

      await resetPassword(resetData);

      expect(redirect).toHaveBeenCalledWith("/error");
    });

    it("should accept any valid email format", async () => {
      const mockSupabase = {
        auth: {
          resetPasswordForEmail: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const emails = ["user@example.com", "test.email@domain.co.uk"];

      for (const email of emails) {
        vi.clearAllMocks();

        const resetData: TSResetPasswordSchema = { email };

        await resetPassword(resetData);

        expect(mockSupabase.auth.resetPasswordForEmail).toHaveBeenCalledWith(
          email,
        );
      }
    });
  });

  // ========================
  // UPDATE PASSWORD TESTS
  // ========================
  describe("updatePassword", () => {
    it("should successfully update user password", async () => {
      const mockSupabase = {
        auth: {
          updateUser: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const updateData: TSUpdatePasswordSchema = {
        password: "NewPass123!",
        passwordConfirm: "NewPass123!",
      };

      await updatePassword(updateData);

      expect(mockSupabase.auth.updateUser).toHaveBeenCalledWith(updateData);
      expect(redirect).toHaveBeenCalledWith("/");
    });

    it("should redirect to error page if password update fails", async () => {
      const mockSupabase = {
        auth: {
          updateUser: vi.fn().mockResolvedValue({
            error: { message: "Invalid token" },
          }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const updateData: TSUpdatePasswordSchema = {
        password: "NewPass123!",
        passwordConfirm: "NewPass123!",
      };

      await updatePassword(updateData);

      expect(redirect).toHaveBeenCalledWith("/error");
    });

    it("should pass the entire password object to updateUser", async () => {
      const mockSupabase = {
        auth: {
          updateUser: vi.fn().mockResolvedValue({ error: null }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      const updateData: TSUpdatePasswordSchema = {
        password: "SecurePass123!",
        passwordConfirm: "SecurePass123!",
      };

      await updatePassword(updateData);

      expect(mockSupabase.auth.updateUser).toHaveBeenCalledWith(
        expect.objectContaining({
          password: "SecurePass123!",
          passwordConfirm: "SecurePass123!",
        }),
      );
    });
  });

  // ========================
  // INTEGRATION TESTS
  // ========================
  describe("Authentication Flow Integration", () => {
    it("should follow complete signup -> signin -> logout flow", async () => {
      const mockSupabase = {
        auth: {
          signUp: vi.fn().mockResolvedValue({ error: null }),
          signInWithPassword: vi.fn().mockResolvedValue({ error: null }),
          signOut: vi.fn().mockResolvedValue({ success: true }),
        },
      };

      vi.mocked(createClient).mockResolvedValue(mockSupabase as any);

      // Step 1: Sign Up
      const signUpData: TSCreateUserSchema = {
        email: "newuser@example.com",
        password: "SecurePass123!",
        passwordConfirm: "SecurePass123!",
        userRole: "fan",
      };

      await signUpWithEmailAndPassword(signUpData);
      expect(mockSupabase.auth.signUp).toHaveBeenCalled();

      vi.clearAllMocks();

      // Step 2: Sign In
      const signInData: TSLogInSchema = {
        email: "newuser@example.com",
        password: "SecurePass123!",
      };

      await signInWithEmailAndPassword(signInData);
      expect(mockSupabase.auth.signInWithPassword).toHaveBeenCalled();

      vi.clearAllMocks();

      // Step 3: Log Out
      const logoutResult = await logOutUser();
      expect(mockSupabase.auth.signOut).toHaveBeenCalled();
      expect(logoutResult).toEqual({ success: true });
    });
  });
});
