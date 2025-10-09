
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
};

export default function SectionWrapper({
  id,
  title,
  children,
  className,
  titleClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full border-t py-12 md:py-24 lg:py-32',
        className
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={cn(
                'font-headline text-3xl font-bold tracking-tighter sm:text-5xl',
                titleClassName
              )}
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:gap-12 lg:grid-cols-1">
          {children}
        </div>
      </div>
    </section>
  );
}
