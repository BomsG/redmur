import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "REDMUR",
  description:
    "Nigerian's first virtual influencer and the beacon of digital fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
