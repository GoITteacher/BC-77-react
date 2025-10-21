"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      Error Post Details: {error.toString()}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
