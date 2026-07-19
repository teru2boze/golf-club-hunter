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
  title: "ゴルフクラブハンター｜あなたに合うゴルフクラブ診断サイト",
  description:
    "初心者から上級者まで、自分に合うゴルフクラブを診断。ドライバー・アイアン・ユーティリティを比較して最適な1本を見つけよう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
