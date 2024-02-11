import { Montserrat } from "next/font/google";
import "./globals.css";
import CommonLayout from "./features/navbar/commonLayout";
import Providers from "@/redux/provider";
import Footer from "./component/footer";
import Hidden from "./features/blogs/hidden";

const montserrat = Montserrat({ subsets: ["latin"], weight: "500",display:'swap' });

export const metadata = {
  title: "Vedika Granthasala",
  description: "Vedika Granthasala Layout Page",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body suppressHydrationWarning={true} className={` ${process.env.NODE_ENV === 'development' ? 'debug-screens' : "" } ${montserrat.className}`}>
        <div>
         <Providers>
            <CommonLayout />
            <div>
              {children}
            </div>
            <Hidden className="hidden"/>
            <Footer/>
         </Providers>
        </div>
        </body>
    </html>
  );
}
