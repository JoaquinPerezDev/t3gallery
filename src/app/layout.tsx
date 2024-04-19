import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import TopNav from "./_components/topnav";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 Gallery",
  description: "Generated and put together by Joaquin Perez",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
