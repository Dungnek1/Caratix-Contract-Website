import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    label: 'Hợp Đồng',
    path: '/contract'
  }, {
    label: 'Báo Giá',
    path: '/pricing'
  }, {
    label: 'Node',
    path: '/node'
  }, {
    label: 'Kế Hoạch Tài Chính',
    path: '/financial-plan'
  }, {
    label: 'Tài Liệu',
    path: '/docs'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
        {/* <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-950">
            C
          </div> */}
        <span>Caratix</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-slate-100 ${isActive(item.path) ? 'text-slate-100' : 'text-slate-400'}`}>
          {item.label}
        </Link>)}
      </nav>

      {/* <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={() => window.open('https://github.com', '_blank')}>
            GitHub
          </Button>
          <Button size="sm">Khởi Chạy App</Button>
        </div> */}

      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-2 text-slate-400 hover:text-slate-100" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Nav */}
    {isOpen && <div className="md:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-4">
      {navItems.map(item => <Link key={item.path} to={item.path} className="block text-sm font-medium text-slate-400 hover:text-slate-100" onClick={() => setIsOpen(false)}>
        {item.label}
      </Link>)}
      {/* <div className="pt-4 flex flex-col space-y-2">
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
            <Button className="w-full">Khởi Chạy App</Button>
          </div> */}
    </div>}
  </header>;
}