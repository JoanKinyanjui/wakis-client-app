"use client"
import type { Metadata } from "next";
import { Inter, Crimson_Text  } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
// Swypt ...
import { CryptoProvider } from "swypt-checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "WAKI",
//   description: "Online Fashion Store",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CryptoProvider>
    <html lang="en">
   <StoreProvider>
   <body className={`${inter.className} bg-white_101 dark:bg-black_101`}>
       <div className="bg-white_101 dark:bg-black_101 sticky top-0 w-full z-[1000]">
       <NavBar />
       <TopBar />
       <ToastContainer />
       </div>
         <Suspense fallback={<Loading />}>
         {children}
         </Suspense>
         <Footer />
        </body>
   </StoreProvider>
    </html>
     </CryptoProvider>
  );
}
