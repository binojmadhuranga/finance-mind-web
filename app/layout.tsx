import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "AI Integrated Finance Tracker",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
