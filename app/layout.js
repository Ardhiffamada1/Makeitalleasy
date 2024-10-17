import "./globals.css";

// Import font dari URL eksternal (SF Pro Display)
export const metadata = {
  title: "Makeiteasy | Jasa build website termurah di Semarang",
  description: "Jasa build website termurah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
        />
      </head>
      <body className="font-sf antialiased">
        {children}
      </body>
    </html>
  );
}
