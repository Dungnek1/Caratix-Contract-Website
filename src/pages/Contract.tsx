import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { DataTable } from '../components/DataTable';
import { Badge } from '../components/ui/Badge';
export function Contract() {
  const overviewData = [{
    category: 'Hệ thống kỹ thuật',
    content: 'Smart contract, backend, frontend'
  }, {
    category: 'Quản trị & bảo mật',
    content: 'Multisig, timelock, audit'
  }, {
    category: 'Tokenomics',
    content: 'Phân bổ, vesting'
  }, {
    category: 'Pháp lý',
    content: 'KYC / AML'
  }, {
    category: 'Tài chính',
    content: 'Báo cáo, kiểm toán'
  }, {
    category: 'Vận hành',
    content: 'Giám sát 24/7'
  }];
  const overviewColumns = [{
    header: 'Hạng mục',
    accessorKey: 'category' as const,
    className: 'font-medium w-1/3'
  }, {
    header: 'Nội dung',
    accessorKey: 'content' as const
  }];
  const operationsData = [{
    id: 1,
    name: 'Hệ thống kỹ thuật',
    desc: 'SC, Backend, Frontend',
    cost: '$9,000',
    detail: 'Smart Contract (BEP-20/ERC-20), Staking, Oracle. Backend (NestJS), Frontend (Next.js), Giám sát (Grafana).'
  }, {
    id: 2,
    name: 'Quản trị & bảo mật',
    desc: 'Multisig, Audit',
    cost: '—',
    detail: 'Gnosis Safe Multisig, Timelock, Audit CertiK/PeckShield, Ví cứng.'
  }, {
    id: 3,
    name: 'Nạp / Rút',
    desc: 'Kiến trúc ví',
    cost: '—',
    detail: 'Luồng tài sản, kiến trúc ví, quản lý rủi ro, xử lý khẩn cấp.'
  }, {
    id: 4,
    name: 'Tokenomics',
    desc: 'Treasury, Staking',
    cost: '—',
    detail: 'Phân bổ, Vesting, Cliff, Proof-of-Reserve, Phần thưởng Staking.'
  }, {
    id: 5,
    name: 'Pháp lý',
    desc: 'KYC / Tuân thủ',
    cost: '—',
    detail: 'Chính sách KYC/AML, tích hợp eKYC, Chính sách Bảo mật, Điều khoản Sử dụng.'
  }, {
    id: 6,
    name: 'Tài chính',
    desc: 'Báo cáo & Kiểm toán',
    cost: '$1,000',
    detail: 'Báo cáo định kỳ, kiểm toán tài chính bên thứ ba, quản lý chi phí on-chain.'
  }, {
    id: 7,
    name: 'Chăm sóc khách hàng',
    desc: 'Giám sát 24/7',
    cost: '—',
    detail: 'Đội vận hành 24/7, nâng cấp SC, Hỗ trợ cộng đồng (Telegram/Discord).'
  }];
  const operationsColumns = [{
    header: 'STT',
    accessorKey: 'id' as const,
    className: 'w-12 text-slate-500'
  }, {
    header: 'Nội dung',
    accessorKey: 'name' as const,
    className: 'font-medium'
  }, {
    header: 'Chi tiết',
    accessorKey: 'detail' as const,
    className: 'text-slate-400 text-xs md:text-sm'
  }, {
    header: 'Chi phí',
    accessorKey: 'cost' as const,
    cell: (item: any) => item.cost !== '—' ? <Badge variant="secondary">{item.cost}</Badge> : <span className="text-slate-600">—</span>
  }];
  return <Layout>
      <Section title="Caratix Contract" subtitle="Khung vận hành và thông số kỹ thuật.">
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">2.1 Tổng quan Vận hành</h3>
          <DataTable columns={overviewColumns} data={overviewData} />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">
            2.2 Bảng Vận hành Chi tiết
          </h3>
          <DataTable columns={operationsColumns} data={operationsData} description="Phân tích chi tiết các thành phần vận hành và chi phí liên quan." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
            <h4 className="font-bold text-lg mb-4 text-blue-400">
              Công nghệ Sử dụng
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 list-disc pl-4">
              <li>Frontend Next.js (App Router)</li>
              <li>Backend NestJS / Go</li>
              <li>Database PostgreSQL / Redis</li>
              <li>Smart Contracts (Solidity)</li>
              <li>Triển khai Vercel</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30">
            <h4 className="font-bold text-lg mb-4 text-emerald-400">
              Bảo mật & Tuân thủ
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 list-disc pl-4">
              <li>Kho bạc Multisig (Gnosis Safe)</li>
              <li>Hợp đồng Timelock</li>
              <li>Kiểm toán bên thứ ba (CertiK)</li>
              <li>Tích hợp KYC / AML</li>
              <li>Oracle Proof-of-Reserve</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>;
}