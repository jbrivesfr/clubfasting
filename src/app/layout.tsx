import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Le Fasting | Club de Jeûne Intermittent 16:8",
  description: "Découvrez le jeûne intermittent 16:8 avec Le Fasting. Recettes low-carb, exercices HIIT, et conseils personnalisés pour votre transformation physique et mentale.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
