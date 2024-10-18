import "./globals.css";

export const metadata = {
  title: "Makeiteasy - Software House based in Semarang",
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
