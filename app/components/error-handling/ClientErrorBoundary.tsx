"use client";

import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackProps } from "react-error-boundary";

function ClientErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const [countdown, setCountdown] = useState(10);
  const isRateLimitError = error.message.toLowerCase().includes("rate limit");

  useEffect(() => {
    if (!isRateLimitError) return;

    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          resetErrorBoundary();
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resetErrorBoundary, isRateLimitError]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Error loading stocks</h2>
      <p className="text-red-500 mb-4">{error.message}</p>
      {isRateLimitError ? (
        <p className="mb-4">Retrying in {countdown} seconds...</p>
      ) : (
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
}

export function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ClientErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
