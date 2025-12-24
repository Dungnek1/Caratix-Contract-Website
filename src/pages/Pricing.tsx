import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from 'lucide-react';
import { DataTable } from '../components/DataTable';
export function Pricing() {
  const tiers = [{
    name: 'Gói Khởi Đầu',
    price: '$450,000',
    description: 'Cho giai đoạn xác thực và thử nghiệm ban đầu.',
    features: ['DAU < 10K', 'Hạ tầng cơ bản', 'Testnet + Demo', 'Website cơ bản', 'Ví Demo'],
    color: 'border-slate-700',
    btnVariant: 'outline' as const
  }, {
    name: 'Gói Cơ Bản',
    price: '$1,115,000',
    description: 'Cho nền tảng đang phát triển với người dùng hoạt động.',
    features: ['DAU 10K - 25K', 'Ví Mobile', 'DAO v1', 'Marketplace cơ bản', 'Caratix Pay Network', 'Hợp đồng Mainnet'],
    color: 'border-yellow-500/50 bg-yellow-500/5',
    btnVariant: 'primary' as const,
    popular: true
  }, {
    name: 'Gói Nâng Cao',
    price: '$1,875,000',
    description: 'Sàn giao dịch RWA quy mô doanh nghiệp đầy đủ.',
    features: ['DAU 25K - 50K', 'Sàn RWA Exchange', 'Tuân thủ nâng cao', 'HA Đa vùng', 'AI Price Engine', 'Token hóa Tổ chức'],
    color: 'border-red-500/50 bg-red-500/5',
    btnVariant: 'secondary' as const
  }];
  const comparisonData = [{
    category: 'Phát triển SW',
    feature: 'Website & Landing',
    starter: 'Cơ bản',
    basic: 'Branding chính thức',
    advanced: 'Branding chính thức'
  }, {
    category: 'Phát triển SW',
    feature: 'Hệ thống nền tảng',
    starter: 'Video, Biểu đồ mô phỏng',
    basic: 'Ví Web, Dashboard',
    advanced: 'DeFi Vaults, Bridge'
  }, {
    category: 'Phát triển SW',
    feature: 'Smart Contract',
    starter: 'Testnet (BEP-20)',
    basic: 'Mainnet (BEP-20)',
    advanced: 'Nâng cao + Audit'
  }, {
    category: 'Phát triển SW',
    feature: 'Ví Mobile',
    starter: '—',
    basic: 'iOS & Android',
    advanced: 'Native Multi-chain'
  }, {
    category: 'Exchange',
    feature: 'Token hóa',
    starter: 'Cơ bản (1 Tài sản)',
    basic: 'Nâng cao (Nhiều)',
    advanced: 'Doanh nghiệp (Registry)'
  }, {
    category: 'Exchange',
    feature: 'Thanh khoản',
    starter: 'Nội bộ',
    basic: 'DEX / AMM',
    advanced: 'Order Book / Lending'
  }, {
    category: 'Hạ tầng',
    feature: 'Máy chủ',
    starter: '1 VPS',
    basic: '3 Máy chủ (AWS)',
    advanced: 'HA Cluster Đa vùng'
  }, {
    category: 'Hạ tầng',
    feature: 'Bảo mật',
    starter: 'SSL + Cloudflare',
    basic: 'WAF Enterprise',
    advanced: 'DDOS + CI/CD Tự động'
  }, {
    category: 'Vận hành',
    feature: 'Giám sát',
    starter: 'Cơ bản',
    basic: 'Nâng cao',
    advanced: 'Hạ tầng lõi + 24/7'
  }, {
    category: 'Thanh toán',
    feature: 'Trả góp',
    starter: '$45,000 / tháng',
    basic: '$111,500 / tháng',
    advanced: '$187,500 / tháng'
  }];
  const comparisonColumns = [{
    header: 'Danh mục',
    accessorKey: 'category' as const,
    className: 'text-slate-500 w-32'
  }, {
    header: 'Tính năng',
    accessorKey: 'feature' as const,
    className: 'font-medium'
  }, {
    header: 'Khởi đầu',
    accessorKey: 'starter' as const,
    className: 'text-slate-400'
  }, {
    header: 'Cơ bản',
    accessorKey: 'basic' as const,
    className: 'text-yellow-500'
  }, {
    header: 'Nâng cao',
    accessorKey: 'advanced' as const,
    className: 'text-red-400'
  }];
  return <Layout>
      <Section title="Các Gói Báo Giá" subtitle="Giá cả minh bạch cho mọi giai đoạn phát triển.">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map(tier => <Card key={tier.name} className={`flex flex-col ${tier.color} relative`}>
              {tier.popular && <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <Badge variant="warning" className="px-3 py-1 text-sm">
                    Phổ biến nhất
                  </Badge>
                </div>}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-sm text-slate-400 mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(feature => <li key={feature} className="flex items-start text-sm text-slate-300">
                      <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
                <Button variant={tier.btnVariant} className="w-full">
                  Chọn {tier.name}
                </Button>
                <div className="mt-4 text-center text-xs text-slate-500">
                  Trả góp 12 tháng có sẵn
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Detailed Comparison */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            So sánh Tính năng Chi tiết
          </h3>
          <DataTable columns={comparisonColumns} data={comparisonData} />
        </div>

        {/* Operational Costs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-slate-400 text-sm mb-2">
              Chi phí Vận hành Khởi đầu
            </h4>
            <p className="text-2xl font-bold">
              $6,000{' '}
              <span className="text-sm font-normal text-slate-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-slate-400 text-sm mb-2">
              Chi phí Vận hành Cơ bản
            </h4>
            <p className="text-2xl font-bold text-yellow-500">
              $12,000{' '}
              <span className="text-sm font-normal text-slate-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
            <h4 className="text-slate-400 text-sm mb-2">
              Chi phí Vận hành Nâng cao
            </h4>
            <p className="text-2xl font-bold text-red-500">
              $35,000{' '}
              <span className="text-sm font-normal text-slate-500">/tháng</span>
            </p>
          </div>
        </div>
      </Section>
    </Layout>;
}