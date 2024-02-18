import { Montserrat } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Dentoclinic Lab",
  description: "Dentoclinic lab ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logomain.png" sizes="3x32" />
      </head>
      <body className={font.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
