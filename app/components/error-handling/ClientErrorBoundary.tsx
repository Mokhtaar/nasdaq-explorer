"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { TrendingUp } from "lucide-react";
import Progress from "../ui/Progress";
import Button from "../ui/Button";

function ClientErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const [countdown, setCountdown] = useState(5);
  const progress = Math.max(0, Math.min(100, ((5 - countdown) / 4) * 100));
  const isRateLimitError = error.message.toLowerCase().includes("rate limit");
  const queryClient = useQueryClient();

  const handleReset = useCallback(() => {
    queryClient.removeQueries({
      queryKey: ["stocks", ""],
      exact: true,
    });
    resetErrorBoundary();
  }, [queryClient, resetErrorBoundary]);

  useEffect(() => {
    if (!isRateLimitError) return;

    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          handleReset();
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resetErrorBoundary, isRateLimitError, handleReset]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Error loading stocks
        </h2>
        <p className="text-red-400 mb-6 text-center">{error.message}</p>
        {isRateLimitError ? (
          <Progress countdown={countdown} progress={progress} />
        ) : (
          <Button
            text="Try again"
            icon={<TrendingUp size={18} />}
            onClick={handleReset}
          />
        )}
      </div>
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
