import type { Metadata } from "next";
import "./globals.css";
import TopBar from "./components/TopBar";
import SideBar from "./components/Sidebar";
import ReactQueryProvider from "@/libs/ReactQueryProvider";
import { MainProvider } from "./context/global.context";

export const metadata: Metadata = {
  title: "Voya",
  description: "Yoya tek",

  openGraph: {
    title: "Voya",
    description: "Voya tek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/da.png" type="image/png" sizes="any" />
        <title>Voya</title>
        <meta name="title" content="Voya" />
        <meta name="description" content="Voya tek" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="voya" />
        <meta property="og:description" content="Voya tek" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Voya" />
        <meta property="twitter:description" content="Voya tek" />
      </head>
      <body
        className={`font-[Poppins-Medium] antialiased h-screen overflow-hidden`}
      >
        <ReactQueryProvider>
          <MainProvider>
            <TopBar />
            <div className="bg-[#F0F2F5] px-4 py-10">
              <div className="flex h-screen  w-full gap-6 max-w-[1500px] mx-auto">
                <div className="w-[300px]">
                  <SideBar />
                </div>
                <div
                  className={`w-full overflow-hidden h-[87vh] overflow-y-scroll`}
                >
                  {children}
                </div>
              </div>
            </div>
          </MainProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
