import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "대구광역시교육청 교원인사관리 시스템",
  description: "대구광역시교육청 중등교원인사관리 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
}