import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  children?: NavSubItem[];
}

interface NavSubItem {
  label: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  {
    label: 'Hợp Đồng',
    path: '/contract',
    children: [
      { label: 'Tổng quan Vận hành', sectionId: 'overview' },
      { label: 'Bảng Vận hành Chi tiết', sectionId: 'operations-detail' },
      { label: 'Công nghệ & Bảo mật', sectionId: 'tech-security' }
    ]
  },
  {
    label: 'Báo Giá',
    path: '/pricing',
    children: [
      { label: 'Các Gói Báo Giá', sectionId: 'pricing-tiers' },
      { label: 'So sánh Tính năng', sectionId: 'feature-comparison' },
      { label: 'Chi phí Vận hành', sectionId: 'operational-costs' }
    ]
  },
  // {
  //   label: 'Node',
  //   path: '/node',
  //   children: [
  //     { label: 'Chiến lược Inverse ROI', sectionId: 'inverse-roi' },
  //     { label: 'Cấu trúc Tier Node', sectionId: 'node-tiers' },
  //     { label: 'Tính năng Node', sectionId: 'node-features' }
  //   ]
  // },
  {
    label: 'Kế Hoạch Tài Chính',
    path: '/financial-plan',
    children: [
      { label: 'Tổng quan', sectionId: 'financial-overview' },
      { label: 'Chi tiết Ngân sách', sectionId: 'budget-details' }
    ]
  },
  {
    label: 'Tài Liệu',
    path: '/docs',
    children: [
      { label: 'Giới thiệu', sectionId: 'docs-intro' },
      { label: 'Hướng dẫn', sectionId: 'docs-guide' }
    ]
  }
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(() => {
    // Mở tab hiện tại mặc định
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    return currentItem ? [currentItem.path] : [];
  });

  // Tự động mở tab hiện tại khi location thay đổi
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    if (currentItem) {
      setExpandedItems(prev => {
        if (!prev.includes(currentItem.path)) {
          return [...prev, currentItem.path];
        }
        return prev;
      });
    }
  }, [location.pathname]);

  const toggleExpand = (path: string) => {
    setExpandedItems(prev =>
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset để không bị che bởi header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };


  const isActive = (path: string) => location.pathname === path;
  const isExpanded = (path: string) => expandedItems.includes(path);

  const handleNavClick = (item: NavItem) => {
    // Đóng mobile menu khi click
    setIsMobileOpen(false);
    // Nếu đang ở trang khác, navigate trước
    if (location.pathname !== item.path) {
      navigate(item.path);
      // Đợi một chút để trang load xong rồi mới scroll
      setTimeout(() => {
        if (item.children && item.children.length > 0) {
          scrollToSection(item.children[0].sectionId);
        }
      }, 100);
    } else {
      // Nếu đã ở trang này, scroll đến mục con đầu tiên
      if (item.children && item.children.length > 0) {
        scrollToSection(item.children[0].sectionId);
      }
    }
  };

  const handleSubItemClick = (item: NavItem, subItem: NavSubItem) => {
    // Đóng mobile menu khi click
    setIsMobileOpen(false);
    // Nếu đang ở trang khác, navigate trước
    if (location.pathname !== item.path) {
      navigate(item.path);
      setTimeout(() => {
        scrollToSection(subItem.sectionId);
      }, 100);
    } else {
      scrollToSection(subItem.sectionId);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-black border border-gray-800 rounded-lg text-white hover:text-gray-300"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-40
          w-64 min-h-screen bg-black border-r border-gray-800
          overflow-y-auto transition-transform duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-4">
          <div className="mb-6">
            <button
              onClick={() => {
                navigate('/');
                setIsMobileOpen(false);
              }}
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              Caratix
            </button>
          </div>

        <nav className="space-y-1">
          {navItems.map(item => (
            <div key={item.path}>
              <button
                onClick={() => {
                  if (item.children && item.children.length > 0) {
                    toggleExpand(item.path);
                  }
                  handleNavClick(item);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                }`}
              >
                <span>{item.label}</span>
                {item.children && item.children.length > 0 && (
                  <span className="ml-2">
                    {isExpanded(item.path) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                )}
              </button>

              {item.children && item.children.length > 0 && isExpanded(item.path) && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map(subItem => (
                    <button
                      key={subItem.sectionId}
                      onClick={() => handleSubItemClick(item, subItem)}
                      className="w-full text-left px-3 py-1.5 rounded text-xs text-gray-500 hover:text-gray-300 hover:bg-gray-900/30 transition-colors"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>

    {/* Mobile Overlay */}
    {isMobileOpen && (
      <div
        className="md:hidden fixed inset-0 bg-black/50 z-30"
        onClick={() => setIsMobileOpen(false)}
      />
    )}
    </>
  );
}

