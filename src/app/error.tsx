"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: report to your error tracker.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-start py-32">
      <h1 className="text-3xl font-semibold tracking-tight">
        Something went wrong.
      </h1>
      <p className="mt-3 text-muted">
        An unexpected error occurred while rendering this page.
      </p>
      <Button className="mt-8" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
