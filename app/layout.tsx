import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const myFont = localFont({ src: '../public/fonts/lota/Lota GrotesqueAlt3Regular.ttf' });


export const metadata: Metadata = {
  title: "Revas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={6}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #13BFFF,0 0 5px #9106F9"
        />
        {children}
      </body>
    </html>
  );
}
