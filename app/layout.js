import localFont from "next/font/local";
import Navbar from "./_components/Navbar/Navbar";
import "./globals.css";

const proxima = localFont({
  src: "./fonts/ProximaNova-Regular.otf",
  variable: "--header-font",
  display: 'swap'
});

const domaine = localFont({
  src: "./fonts/TestDomaineDisplay-Regular-BF66174a224cb3d.otf",
  variable: "--text-font",
  display: 'swap'

})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${proxima.variable} ${domaine.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html >
  );
}
