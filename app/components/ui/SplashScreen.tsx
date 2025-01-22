"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SplashScreenProps } from "@/app/lib/types/ui";

export function SplashScreen({ redirectTo, delay = 2000 }: SplashScreenProps) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectTo);
    }, delay);

    return () => clearTimeout(timer);
  }, [router, redirectTo, delay]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center space-y-40">
        <Image
          src="/NASDAQ_Logo Only.svg"
          alt="Nasdaq Logo"
          width={100}
          height={100}
          priority
          className="animate-pulse aspect-auto w-44 h-44 sm:w-full sm:h-full"
        />
        <div className="p-4 text-sm sm:text-lg">Developed by Mokhtar</div>
      </div>
    </div>
  );
}
