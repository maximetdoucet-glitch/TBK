import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
