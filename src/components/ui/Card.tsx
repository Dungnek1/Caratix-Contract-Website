import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  ...props
}: CardProps) {
  return <div className={`rounded-xl border border-slate-800 bg-slate-900/50 text-slate-100 shadow-sm ${className}`} {...props}>
      <div className={noPadding ? '' : 'p-6'}>{children}</div>
    </div>;
}
export function CardHeader({
  children,
  className = ''
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col space-y-1.5 p-6 pb-0 ${className}`}>
      {children}
    </div>;
}
export function CardTitle({
  children,
  className = ''
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>;
}
export function CardContent({
  children,
  className = ''
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-4 ${className}`}>{children}</div>;
}