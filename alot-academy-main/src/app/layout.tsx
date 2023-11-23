
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton"


export const metadata = {
  title: "Alot Academy",
  description:
    "Alot Project Team Website",
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png"
    }
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  prevent extensions from causing a mismatch 
      https://stackoverflow.com/a/75339011/5197022 */}
      <Box as="body" suppressHydrationWarning={true} bg={"#F5FEFD"}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </Box>
    </html>
  )
}
