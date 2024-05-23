import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "@/shared/constants/styles/globals.css";
import Header from "@/features/header";
import Footer from "@/features/footer";

const ubuntu = Ubuntu({
  weight: ["400", "500"],
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "News App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
