import React from 'react';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success' | 'warning' | 'destructive';
}
export function Badge({
  children,
  variant = 'default',
  className = '',
  ...props
}: BadgeProps) {
  const variants = {
    default: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200/80',
    secondary: 'border-transparent bg-slate-800 text-slate-100 hover:bg-slate-800/80',
    outline: 'text-slate-100 border-slate-700',
    success: 'border-transparent bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25',
    warning: 'border-transparent bg-amber-500/15 text-amber-400 hover:bg-amber-500/25',
    destructive: 'border-transparent bg-red-500/15 text-red-400 hover:bg-red-500/25'
  };
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold  text-[20px] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>;
}