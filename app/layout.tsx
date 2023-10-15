import "./globals.css";
import type { Metadata } from "next";

import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Nicolas U Guasca",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
