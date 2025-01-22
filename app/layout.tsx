import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/react-query-provider";

export const metadata: Metadata = {
  title: "Nasdaq Stock Market",
  description: "Nasdaq Stock Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
