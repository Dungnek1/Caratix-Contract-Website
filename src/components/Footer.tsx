import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 font-bold text-xl tracking-tight">
            <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center text-slate-100 text-xs">
              C
            </div>
            <span>Caratix</span>
          </div>
          <p className="text-sm text-slate-400">
            Hạ tầng RWA & Bảo chứng Kim cương cấp Tổ chức.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Nền Tảng</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link to="/contract" className="hover:text-slate-100">
                Hợp Đồng
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-slate-100">
                Báo Giá
              </Link>
            </li>
            <li>
              <Link to="/node" className="hover:text-slate-100">
                Node
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Tài Nguyên</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link to="/docs" className="hover:text-slate-100">
                Tài Liệu
              </Link>
            </li>
            <li>
              <Link to="/financial-plan" className="hover:text-slate-100">
                Kế Hoạch Tài Chính
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-slate-100">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Pháp Lý</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="#" className="hover:text-slate-100">
                Chính Sách Bảo Mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-100">
                Điều Khoản Dịch Vụ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-100">
                Cảnh Báo Rủi Ro
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Caratix Protocol. Bảo lưu mọi quyền.
      </div>
    </footer>;
}