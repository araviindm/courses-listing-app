import type { Metadata } from "next";
import "@/styles/global.css";

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
        className="bg-gray-900 text-slate-400 m-4 md:m-10"
      >
        {children}
      </body>
    </html>
  );
}
