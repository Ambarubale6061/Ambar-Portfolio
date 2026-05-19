import "./globals.css";

// हाय-लेव्हल प्रोफेशनल SEO मॅटाडेटा
export const metadata = {
  title: "Ambar Ubale | Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Ambar Ubale, specialized in React, Next.js, Node.js, and advanced web ecosystems.",
  keywords: [
    "Ambar Ubale",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Software Engineer",
  ],
};

// मूळ रूट लेआउट कंपोनंट जो Next.js ला डीफॉल्ट एक्सपोर्ट म्हणून हवा असतो
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
