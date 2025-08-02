import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Using Inter as fallback since Onest needs to be loaded via CSS
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "London Eyecare Collective | Premium Eye Care & Luxury Eyewear",
  description: "Premium eye care services and luxury eyewear in the heart of London. Expert optometrists, designer frames from Cartier, Maybach, and more. Located on Harley Street with exclusive Harley Lounge access.",
  keywords: "eye care, optometrist, luxury eyewear, Cartier glasses, London, Harley Street, Harley Lounge, premium eye exams",
  openGraph: {
    title: "London Eyecare Collective",
    description: "Premium eye care services and luxury eyewear in London",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Eyecare Collective",
    description: "Premium eye care services and luxury eyewear in London",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="pt-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}