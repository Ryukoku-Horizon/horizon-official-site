//'use client'

import "../styles/global.css";

import { teko, rubik_mono_one, kanit, murecho} from '../utiles/font'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${teko.variable} ${rubik_mono_one.variable} ${kanit.variable} ${murecho.variable}`}>
        <body className="bg-black">
          {children}
        </body>
      </html>
  );
}