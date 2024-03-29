import { Suspense } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import AOSWrapper from "@/utils/aosInit";
import theme from "@/utils/ThemeRegistry";
import Footer from "@/components/Footer/Footer";
import GTSSpeedDial from "@/components/SpeedDial";
import Header from "@/components/Header/HeaderFunctions";

import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTS Recruitment",
  description:
    "GTS - is a leading business recruitment company. We offer highly qualified specialists to meet unique business needs. A specialized method of personnel selection aimed at identifying and attracting top specialists for specific positions in the organization.",
};

export default function RootLayout({ children, params }) {
  return (
    <AOSWrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <Suspense>{children}</Suspense>
            <Footer />
            <GTSSpeedDial />
            <ToastContainer />
          </body>
        </html>
      </ThemeProvider>
    </AOSWrapper>
  );
}
