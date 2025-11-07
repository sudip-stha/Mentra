import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import NavBar from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mentra",
  description: "",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <ClerkProvider
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
           
        </head>
        <body className={`${inter.className} bg-color `}>
           <ThemeProvider
            attribute="class"
            defaultTheme="Light"
            enableSystem
            disableTransitionOnChange
          >
          
            <Header />
            <NavBar />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
