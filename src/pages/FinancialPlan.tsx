import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/ui/Badge';
export function FinancialPlan() {
  const planT12 = [{
    item: 'UX/UI Khởi đầu',
    detail: 'Giai đoạn thiết kế ban đầu',
    cost: '$5,500',
    status: 'Chưa nhận'
  }, {
    item: 'Dev + Docs',
    detail: 'DevOps, Backend, Frontend, Tài liệu',
    cost: '$2,500',
    status: 'Hàng tháng'
  }, {
    item: 'Tính năng',
    detail: 'Module ICO + Staking',
    cost: '$9,000',
    status: 'Chưa nhận'
  }, {
    item: 'Vận hành',
    detail: 'Dashboard Admin, Vận hành Hệ thống',
    cost: '$3,000',
    status: 'Chưa nhận'
  }, {
    item: 'Chăm sóc KH',
    detail: 'Hỗ trợ & Xử lý sự cố',
    cost: '$1,500',
    status: 'Chưa nhận'
  }, {
    item: 'Thiết bị',
    detail: '2 Macbook + 1 iPhone',
    cost: '$4,000',
    status: 'Chưa nhận'
  }];
  const planT1 = [{
    item: 'Tài nguyên Dev',
    detail: 'Bảo trì máy chủ, DevOps',
    cost: '$2,500',
    status: 'Hàng tháng'
  }, {
    item: 'Tính năng',
    detail: 'Marketplace + Tích hợp X402',
    cost: '$15,000',
    status: 'Chưa nhận'
  }, {
    item: 'Vận hành',
    detail: 'Vận hành Marketplace & ICO',
    cost: '$3,000',
    status: 'Chưa nhận'
  }, {
    item: 'Chăm sóc KH',
    detail: 'Hỗ trợ',
    cost: '$1,500',
    status: 'Chưa nhận'
  }];
  const columns = [{
    header: 'Hạng mục',
    accessorKey: 'item' as const,
    className: 'font-medium'
  }, {
    header: 'Chi tiết',
    accessorKey: 'detail' as const,
    className: 'text-slate-400'
  }, {
    header: 'Chi phí',
    accessorKey: 'cost' as const,
    className: 'font-mono'
  }, {
    header: 'Trạng thái',
    accessorKey: 'status' as const,
    cell: (item: any) => <Badge variant="secondary" className="text-xs">
          {item.status}
        </Badge>
  }];
  return <Layout>
      <Section title="Kế Hoạch Tài Chính" subtitle="Phân tích chi phí và lịch trình phân bổ.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Tháng 12/2025</h3>
              <Badge variant="outline" className="text-lg px-3 py-1">
                $25,500
              </Badge>
            </div>
            <DataTable columns={columns} data={planT12} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Tháng 1/2026</h3>
              <Badge variant="outline" className="text-lg px-3 py-1">
                $22,000
              </Badge>
            </div>
            <DataTable columns={columns} data={planT1} />
          </div>
        </div>

        <div className="mt-16 p-8 rounded-xl border border-slate-800 bg-slate-900/20">
          <h3 className="text-lg font-bold mb-4">Lưu ý Lịch Thanh toán</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Chi phí vận hành định kỳ (DevOps, Bảo trì Máy chủ) được thanh toán
            hàng tháng vào ngày 4. Các mốc phát triển tính năng (ICO,
            Marketplace) được thanh toán khi hoàn thành hoặc theo lịch trình đã
            thỏa thuận (ví dụ: ngày 15 hàng tháng). Chi phí thiết bị là chi phí
            một lần cho giai đoạn thiết lập ban đầu.
          </p>
        </div>
      </Section>
    </Layout>;
}