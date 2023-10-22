import { cn } from "@/lib/utils";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uni-Abuja Navigation",
  description: "University of Abuja Navigation Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "light bg-white text-slate-900 antialiased",
        inter.className,
      )}
    >
      <body className="min-h-screen bg-slate-50 pt-12 antialiased">
        <Providers>
          <Navbar />

          <div className="container mx-auto h-full ">{children}</div>

          <Footer />

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
