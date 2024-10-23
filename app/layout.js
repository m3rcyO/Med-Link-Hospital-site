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

});

const domaineBold = localFont({
  src: "./fonts/TestDomaineDisplay-Bold-BF66174a223c3e2.otf",
  variable: "--textBold-font",
  display: 'swap'
})

const proximaBold = localFont({
  src: "./fonts/Proxima Nova Alt Bold.otf",
  variable: "--headerBold-font",
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${proxima.variable} ${domaine.variable} antialiased`}>
        <Navbar className="z-20 relative" />
        {children}
      </body>
    </html >
  );
}
