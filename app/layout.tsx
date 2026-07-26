import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ゴルフクラブハンター｜自分に合うゴルフクラブ診断・比較",
  description:
    "初心者から上級者まで、自分に合うゴルフクラブを無料診断。ドライバー・アイアン・ユーティリティを比較し、飛距離・やさしさ・操作性からおすすめクラブを紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-60GK8VY6NH"
  />
  <Script id="google-analytics">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-60GK8VY6NH');
    `}
  </Script>

  {children}
</body>
    </html>
  );
}
