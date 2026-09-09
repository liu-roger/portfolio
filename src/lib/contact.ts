/**
 * Shared shape for the contact form. Kept out of `actions.ts` because a
 * `"use server"` module may only export async functions.
 */
export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field name -> error, so the form can render inline messages. */
  errors: Record<string, string>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
  errors: {},
};
