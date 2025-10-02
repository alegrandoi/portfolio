import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Alejandro Rodríguez Gómez | Desarrollador Java',
  description:
    'Portfolio de Alejandro Rodríguez, Ingeniero Informático y Desarrollador Java en Sevilla. Apasionado del software, el aprendizaje continuo y los retos tecnológicos. Explora mis proyectos, habilidades y experiencia en desarrollo backend con Spring Boot, APIs REST, SQL y Python.',
  keywords: [
    'Desarrollador Java',
    'Backend',
    'Spring Boot',
    'Ingeniero Informático',
    'Sevilla',
    'APIs REST',
    'SQL',
    'Python',
    'portfolio',
    'programador',
    'desarrollo de software',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
