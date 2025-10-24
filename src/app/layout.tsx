import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo, Tajawal, Inter, Rakkas } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/ui/NavbarDemo";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const rakkas = Rakkas({
  variable: "--font-rakkas",
  subsets: ["arabic", "latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "الرفاعي جروب - شريكك في التسويق الرقمي",
  description: "نحول رؤيتك إلى نجاح رقمي ملموس. حلول تسويقية متكاملة ومبتكرة تضمن لك التفوق في السوق.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="ar" dir="rtl" suppressHydrationWarning>
			<body
				className={`${cairo.variable} ${rakkas.variable} font-cairo antialiased`}
				suppressHydrationWarning
			>
        <LanguageProvider>
          <NavbarDemo />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
