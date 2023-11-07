import type { Metadata } from "next";
import "@/styles/global.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Courses Listing App",
  description: "It's a app which lists courses and their details.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="bg-gray-900 text-slate-400 m-6 md:mx-16 flex flex-col h-screen"
      >
        <div className="fixed top-0 left-0 z-10 w-full bg-slate-800">
          <NavBar />
        </div>
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
