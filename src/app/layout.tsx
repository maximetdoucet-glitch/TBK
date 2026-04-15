import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "TBK Lightshop | Dé specialist voor aanstekers & rokensaccessoires in Nijmegen",
  description: "Welkom bij TBK Lightshop. Dé online speciaalzaak voor Zippo, Clipper, vloei, sigarenknippers en meer. Gevestigd in Nijmegen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${montserrat.variable} ${nunitoSans.variable} antialiased`} style={{ fontFamily: "var(--font-nunito-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
