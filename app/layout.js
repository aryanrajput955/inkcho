import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navigation from "./components/navbar";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
});

export const metadata = {
  title: {
    default: "Inkcho | Brand Strategy, Visual Identity & Digital Experiences",
    template: "%s | Inkcho"
  },
  description: "Inkcho is a creative studio specializing in brand strategy, visual identity, and digital experiences. We build systems that scale as businesses grow.",
  keywords: ["Brand Strategy", "Visual Identity", "Digital Experience", "UI/UX Design", "Web Development", "Inkcho Studio", "Branding Agency"],
  authors: [{ name: "Inkcho Studio" }],
  openGraph: {
    title: "Inkcho | Brand Strategy, Visual Identity & Digital Experiences",
    description: "Constructing strong brands through strategy, identity, and digital innovation.",
    url: "https://inkchodesigns.com",
    siteName: "Inkcho",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Inkcho Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkcho | Brand Strategy, Visual Identity & Digital Experiences",
    description: "Constructing strong brands through strategy, identity, and digital innovation.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${scriptFont.variable}`}>
      <body className="antialiased font-[var(--font-body)]">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
