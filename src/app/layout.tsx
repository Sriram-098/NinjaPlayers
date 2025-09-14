import Footer from "../../components/home/Footer";
import Header from "../../components/home/Header";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My App",
  description: "Next.js App Router Example",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
