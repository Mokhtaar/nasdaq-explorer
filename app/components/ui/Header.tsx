import Image from "next/image";
import SearchBar from "./SearchBar";
import { HeaderProps } from "../../lib/types/ui";
import Link from "next/link";

export default function Header({ onSearch }: HeaderProps) {
  return (
    <header className="border-b border-gray-800 w-full">
      {/* Mobile layout */}
      <div className="flex flex-col gap-4 mt-4 md:hidden">
        <div className="flex justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              width={116}
              height={33}
              src="/NASDAQ_Logo.svg"
              alt="Nasdaq"
            />
          </Link>
        </div>
        <div className="w-full max-w-3xl">
          <SearchBar onSearch={onSearch} placeholder="Search stocks..." />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-3 items-center px-6 gap-4">
        <div className="flex justify-start">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              width={116}
              height={33}
              src="/NASDAQ_Logo.svg"
              alt="Nasdaq"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <SearchBar onSearch={onSearch} placeholder="Search stocks..." />
          </div>
        </div>
        <div />
      </div>
    </header>
  );
}
