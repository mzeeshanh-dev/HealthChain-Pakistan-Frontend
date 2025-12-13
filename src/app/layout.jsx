import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "HealthChain Pakistan",
  description: "Patient-Centric healthcare system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
