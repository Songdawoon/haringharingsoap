import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "하링하링솝 | 엄마의 마음으로 빚은 천연 비누",
  description:
    "딸 하링이를 위해 고른 정직한 재료만으로 만든 천연 수제비누. 집에서 쉽게 만드는 혼비 키트로 함께해요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
