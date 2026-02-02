import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Premium fonts
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preetesh Travels | Beyond Borders, Beyond Dreams",
  description: "Experience premium travel with Preetesh Travels. Curated tours, luxury escapes, and unforgettable journeys.",
  keywords: ["travel", "tours", "bhopal", "madhya pradesh", "vacation", "preetesh travels", "adventure", "luxury"],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Preetesh Travels | Premium Tours & Adventures",
    description: "Book your dream vacation with Preetesh Travels. Expertly curated packages for an unforgettable experience.",
    images: [{ url: "/logo.jpg", width: 800, height: 800, alt: "Preetesh Travels" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
