
'use client';

import * as React from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear()
  );

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t bg-background py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          © {currentYear} Alejandro Rodríguez Gómez. Diseñado y construido con
          pasión.
        </p>
      </div>
    </footer>
  );
}
