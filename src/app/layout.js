import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* - body ला 'min-h-screen' दिल्याने कंटेंट कमी असला तरी 
          wavy-bottom खाली दिसेल.
      */}
      <body className="min-h-screen flex flex-col bg-[#eef3f6] text-slate-800 antialiased">
        {/* Main Wrapper */}
        <main className="flex-grow w-full">{children}</main>

        {/* Optional: Footer or global wave at the bottom */}
        <footer className="w-full mt-auto">
          {/* Tuza footer ithe yeil */}
        </footer>
      </body>
    </html>
  );
}
