import Header from "@/components/header/Header";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Next js Ecommerce",
  description: "This is a shop where we sell online Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main className="bg-primary-gradient max-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
