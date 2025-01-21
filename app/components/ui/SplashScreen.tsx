"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/explore");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="flex-grow flex items-center justify-center">
        <Image
          src="/NASDAQ_Logo Only.svg"
          alt="Nasdaq Logo"
          width={200}
          height={100}
          className="animate-pulse"
        />
      </div>
      <div className="p-4 text-sm">Developed by Mokhtar</div>
    </div>
  );
}
