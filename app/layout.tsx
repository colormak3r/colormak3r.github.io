import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Khoa Nguyen's Portfolio",
  description: "A fun video game showcase website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body>
      <Navbar />
        <div className="bg-gradient-to-b from-mine-1 to bg-mine-4 h-auto min-h-screen">
          <div className="max-w-5xl py-12 px-6 justify-center mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
