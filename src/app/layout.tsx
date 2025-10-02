import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { I18nProvider } from '@/context/i18n-provider';

export const metadata: Metadata = {
  title: 'Alejandro Rodríguez Gómez | Java Developer',
  description:
    "Alejandro Rodríguez's Portfolio, Computer Engineer and Java Developer in Seville. Passionate about software, continuous learning, and technological challenges. Explore my projects, skills, and experience in backend development with Spring Boot, REST APIs, SQL, and Python.",
  keywords: [
    'Java Developer',
    'Backend',
    'Spring Boot',
    'Computer Engineer',
    'Seville',
    'REST APIs',
    'SQL',
    'Python',
    'portfolio',
    'programmer',
    'software development',
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
        <I18nProvider>
          {children}
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
