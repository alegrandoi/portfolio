
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, Code2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useI18n } from '@/hooks/use-i18n';
import LanguageSwitcher from '../language-switcher';
import ThemeSwitcher from '../theme-switcher';

export default function Header() {
  const { t } = useI18n();
  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#education', label: t('nav.education') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link
            href="#home"
            className="mr-6 flex items-center space-x-2"
          >
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">AR.</span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="#home"
                  className="flex items-center space-x-2"
                >
                  <Code2 className="h-6 w-6 text-primary" />
                  <span className="font-bold">AR.</span>
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map(link => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
