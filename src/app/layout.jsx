import { Montserrat } from "next/font/google";
import "./style/globals.css";
import Navbar from "./components/sections/navbar";
import Footer from "./components/sections/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Furnniro",
  description: "Furniture Shopping Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
