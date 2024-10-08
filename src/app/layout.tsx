
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
      <head>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
