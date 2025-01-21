import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
