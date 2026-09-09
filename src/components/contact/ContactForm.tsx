"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactState } from "@/lib/contact";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus-visible:border-accent";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="max-w-xl space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm">
          Name
        </label>
        <input id="name" name="name" autoComplete="name" className={fieldClasses} />
        {state.errors.name && (
          <p className="mt-1.5 text-sm text-accent">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={fieldClasses}
        />
        {state.errors.email && (
          <p className="mt-1.5 text-sm text-accent">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(fieldClasses, "resize-y")}
        />
        {state.errors.message && (
          <p className="mt-1.5 text-sm text-accent">{state.errors.message}</p>
        )}
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4">
        <SubmitButton />
        {state.status !== "idle" && (
          <p
            role="status"
            className={cn(
              "text-sm",
              state.status === "success" ? "text-muted" : "text-accent",
            )}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
