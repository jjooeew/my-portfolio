import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "My Portfolio",
  description: "Developer portfolio showcasing web and mobile projects",
};

export default function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <div>
            <Navbar />
            <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-500">{children}</main>
        </div>
      </body>
    </html>
  );
}
