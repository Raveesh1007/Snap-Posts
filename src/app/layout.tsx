import "../app/styles/globals.css";
import { Inter } from "@next/font/google";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Snap-Posts',
  description: 'Convert Your tweets into beautiful images',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className={inter.className}>
        {children}
        {/* Only include Analytics in production */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
