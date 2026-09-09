"use server";

import type { ContactState } from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Hidden field: real people leave it empty, bots fill it in.
  const honeypot = String(formData.get("company") ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the fields below.",
      errors,
    };
  }

  if (honeypot) {
    // Silently accept so bots do not learn they were caught.
    return { status: "success", message: "Thanks — I'll be in touch.", errors: {} };
  }

  // TODO: deliver the message — e.g. Resend, Postmark, or a webhook.
  // Read credentials from environment variables, never hard-code them.
  console.info("Contact form submission", { name, email, message });

  return {
    status: "success",
    message: "Thanks — your message was sent. I'll be in touch.",
    errors: {},
  };
}
