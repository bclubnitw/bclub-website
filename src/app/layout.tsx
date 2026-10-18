import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // 700 & 800 are great for display headers and taglines
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ideal weights for readable body & UI
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Club | NIT Warangal",
  description: "Official website of Business Club, NIT Warangal. Learn. Teach. Innovate. Evolve.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#ebf4f6] text-[#111318]">
        {children}
      </body>
    </html>
  );
}