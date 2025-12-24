import React from 'react';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}
export function Section({
  children,
  className = '',
  id,
  title,
  subtitle
}: SectionProps) {
  return <section id={id} className={`py-16 md:py-16 px-2 ${className}`}>
      <div className="container mx-auto max-w-8xl">
        {(title || subtitle) && <div className="mb-12 text-center max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#F9D649]">
                {title}
              </h2>}
            {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
          </div>}
        {children}
      </div>
    </section>;
}