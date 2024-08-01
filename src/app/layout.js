import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Your Store Name - Product Listing',
  description: 'Browse our wide range of products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}