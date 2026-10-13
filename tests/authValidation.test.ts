import { describe, it, expect } from "vitest";
import { logInSchema, createUserSchema } from "@/types/comics-src-types";
import type {
  TSLogInSchema,
  TSCreateUserSchema,
} from "@/types/comics-src-types";

describe("Authentication Validation", () => {
  // LOGIN SCHEMA TESTS
  describe("Log-In Schema", () => {
    it("should validate correct email and password", () => {
      const validData: TSLogInSchema = {
        email: "user@example.com",
        password: "ValidPass123!",
      };

      const result = logInSchema.safeParse(validData);
      expect(result.success).toBe(true);
      expect(result.data).toEqual(validData);
    });

    it("should reject invalid email format", () => {
      const invalidData = {
        email: "invalid-email",
        password: "ValidPass123!",
      };

      const result = logInSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid email");
      }
    });

    it("should reject password shorter than 8 characters", () => {
      const invalidData = {
        email: "user@example.com",
        password: "Short1!",
      };

      const result = logInSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "at least 8 characters",
        );
      }
    });

    it("should reject empty email", () => {
      const invalidData = {
        email: "",
        password: "ValidPass123!",
      };

      const result = logInSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  // SIGN-UP SCHEMA TESTS
  describe("Sign-Up Schema", () => {
    it("should validate correct sign-up data with matching passwords", () => {
      const validData: TSCreateUserSchema = {
        email: "newuser@example.com",
        password: "SecurePass123!",
        passwordConfirm: "SecurePass123!",
        userRole: "fan",
      };

      const result = createUserSchema.safeParse(validData);
      expect(result.success).toBe(true);
      expect(result.data?.email).toBe("newuser@example.com");
    });

    it("should reject non-matching passwords", () => {
      const invalidData = {
        email: "newuser@example.com",
        password: "SecurePass123!",
        passwordConfirm: "DifferentPass123!",
        userRole: "fan",
      };

      const result = createUserSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain(
          "Passwords do not match",
        );
      }
    });

    it("should reject password without special character", () => {
      const invalidData = {
        email: "newuser@example.com",
        password: "SecurePass123",
        passwordConfirm: "SecurePass123",
        userRole: "fan",
      };

      const result = createUserSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("special character");
      }
    });

    it("should reject password without uppercase letter", () => {
      const invalidData = {
        email: "newuser@example.com",
        password: "securepass123!",
        passwordConfirm: "securepass123!",
        userRole: "fan",
      };

      const result = createUserSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("uppercase");
      }
    });

    it("should accept any of the three user roles", () => {
      const roles = ["fan", "author", "publisher"];

      roles.forEach((role) => {
        const data: TSCreateUserSchema = {
          email: "user@example.com",
          password: "ValidPass123!",
          passwordConfirm: "ValidPass123!",
          userRole: role,
        };

        const result = createUserSchema.safeParse(data);
        expect(result.success).toBe(true);
      });
    });
  });
});
