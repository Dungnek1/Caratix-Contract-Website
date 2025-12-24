import { useState } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from 'lucide-react';
import { DataTable } from '../components/DataTable';
import { Modal } from '../components/ui/Modal';

export function Pricing() {
  const [openModal, setOpenModal] = useState<string | null>(null);
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
    className: 'text-slate-400 text-base w-40 font-medium'
  }, {
    header: 'Tính năng',
    accessorKey: 'feature' as const,
    className: 'font-semibold text-white text-base min-w-[200px]'
  }, {
    header: 'Khởi đầu',
    accessorKey: 'starter' as const,
    className: 'text-slate-300 text-base'
  }, {
    header: 'Cơ bản',
    accessorKey: 'basic' as const,
    className: 'text-yellow-500 text-base font-medium'
  }, {
    header: 'Nâng cao',
    accessorKey: 'advanced' as const,
    className: 'text-red-400 text-base font-medium'
  }];
  return <Layout>
      <Section title="Các Gói Báo Giá" subtitle="Chi phí phát triển phầm mền.">
        {/* Pricing Cards */}
        <div id="pricing-tiers" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 scroll-mt-24">
          {tiers.map(tier => <Card key={tier.name} className={`flex flex-col ${tier.color} relative`}>
              {tier.popular && <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <Badge variant="warning" className="px-3 py-1 text-sm">
                    Phổ biến nhất
                  </Badge>
                </div>}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <p className="text-sm text-gray-400 mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(feature => <li key={feature} className="flex items-start text-sm text-gray-300">
                      <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
                <Button 
                  variant={tier.btnVariant} 
                  className="w-full"
                  onClick={() => setOpenModal(tier.name)}
                >
                  Chọn {tier.name}
                </Button>
                {/* <div className="mt-4 text-center text-xs text-gray-500">
                  Trả góp 12 tháng có sẵn
                </div> */}
              </CardContent>
            </Card>)}
        </div>

        {/* Chi phí Chi tiết */}
        <div id="detailed-costs" className="mb-12 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Bảng Vận hành Chi tiết
          </h3>
          
          <div className="rounded-md border border-slate-800 overflow-hidden bg-slate-900/50">
            <div className="overflow-x-auto">
              <table className="w-full text-base text-left">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                  <tr>
                    <th className="h-14 px-6 font-semibold align-middle text-left w-48 border-r border-slate-700">Hạng mục</th>
                    <th className="h-14 px-6 font-semibold align-middle text-center border-r border-slate-700">Khởi đầu</th>
                    <th className="h-14 px-6 font-semibold align-middle text-center border-r border-slate-700">Cơ bản</th>
                    <th className="h-14 px-6 font-semibold align-middle text-center">Nâng cao</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-black/50">
                  {/* Trả góp */}
                  {/* <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      Trả góp trong vòng 12 tháng
                    </td>
                  </tr> */}
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Chi phí phát triển phần mềm</td>
                    <td className="py-5 px-6 text-slate-300 text-center text-[20px] border-r border-slate-700">$45,000/tháng</td>
                    <td className="py-5 px-6 text-yellow-500 text-[20px] text-center font-medium border-r border-slate-700">$111,500/tháng</td>
                    <td className="py-5 px-6 text-red-400 text-[20px] text-center font-medium">$187,500/tháng</td>
                  </tr>

                  {/* Hạ tầng */}
                  <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      Hạ tầng
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Máy chủ</td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>01 VPS (Ubuntu 24.04) triển khai web, backend, testnet node.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>3 máy chủ độc lập (staging / production / oracle feed) triển khai trên AWS hoặc Hetzner.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>High-Availability (HA) cluster: multi-region deployment.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Bảo mật & SSL</td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>SSL + Cloudflare bảo vệ layer cơ bản.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Firewall + Cloudflare + SSL wildcard + DDOS protection.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>CDN & WAF Enterprise (Cloudflare Pro).</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Triển khai</td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Docker Compose triển khai tự động.</li>
                        <li>CI/CD mini pipeline GitHub Actions để build và deploy lên test server.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Cấu hình Docker Compose multi-service (API, DB, queue, redis, traefik).</li>
                        <li>Triển khai monitoring + backup tự động (Grafana, Prometheus).</li>
                        <li>Tích hợp CI/CD GitHub Actions tự động hóa build – deploy – rollback.</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Load balancer, autoscaling, giám sát 24/7.</li>
                        <li>Dedicated Oracle node cập nhật Proof-of-Reserve liên tục.</li>
                        <li>Triển khai CI/CD full automation với rollback và monitoring dashboard real-time.</li>
                      </ul>
                    </td>
                  </tr>

                  {/* Chi phí Vận hành */}
                  {/* <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      Chi phí Vận hành (Tháng)
                    </td>
                  </tr> */}
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Chi phí hàng tháng</td>
                    <td className="py-5 px-6 text-slate-300 text-center text-[20px] font-semibold border-r border-slate-700">$6,000/tháng</td>
                    <td className="py-5 px-6 text-yellow-500 text-center text-[20px] font-semibold border-r border-slate-700">$12,000/tháng</td>
                    <td className="py-5 px-6 text-red-400 text-center text-[20px] font-semibold">$35,000/tháng</td>
                  </tr>

                  {/* Vận hành */}
                  <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      Vận hành
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Dịch vụ vận hành</td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1.5 text-sm">
                        <li>Giám sát & vận hành cơ bản</li>
                        <li>Sao lưu & khôi phục dữ liệu</li>
                        <li>Hướng dẫn triển khai lại hệ thống</li>
                        <li>Fix lỗi nhỏ giao diện (UI)</li>
                        <li>Điều chỉnh logic nhẹ trong phạm vi MVP đã thống nhất</li>
                        <li>Đào tạo vận hành cơ bản (1–2 buổi)</li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300 border-r border-slate-700">
                      <ul className="list-disc list-inside space-y-1.5 text-sm">
                        <li><strong>1. Giám sát hệ thống nâng cao</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Giám sát Node Mainnet</li>
                            <li>Theo dõi: Smart Contract, Pool staking</li>
                          </ul>
                        </li>
                        <li><strong>2. Bảo mật Smart Contract</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Kiểm tra định kỳ: Logic staking, Phân phối reward</li>
                            <li>Vá lỗi contract nhỏ (non-breaking changes)</li>
                          </ul>
                        </li>
                        <li><strong>3. Cập nhật Smart Contract & staking logic</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Điều chỉnh thông số: APY, Phân phối reward</li>
                            <li>Theo yêu cầu dự án (đã được thống nhất scope)</li>
                          </ul>
                        </li>
                        <li><strong>👥 Quản lý người dùng & tuân thủ</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Bảo trì API KYC / AML</li>
                            <li>Hỗ trợ lưu trữ & quản lý hồ sơ người dùng</li>
                            <li>Đảm bảo dữ liệu tuân thủ quy trình bảo mật</li>
                          </ul>
                        </li>
                        <li><strong>🌐 Tư vấn tích hợp DeFi</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Listing token</li>
                            <li>Tạo pool thanh khoản</li>
                            <li>Pool staking (ví dụ: PancakeSwap)</li>
                            <li>Không bao gồm cung cấp thanh khoản</li>
                          </ul>
                        </li>
                        <li><strong>🎓 Đào tạo</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Đào tạo đội ngũ vận hành nội bộ</li>
                          </ul>
                        </li>
                      </ul>
                    </td>
                    <td className="py-5 px-6 text-slate-300">
                      <ul className="list-disc list-inside space-y-1.5 text-sm">
                        <li><strong>1. Giám sát hạ tầng lõi</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Giám sát: Treasury & reward flow</li>
                            <li>Theo dõi 24/7 với cảnh báo nâng cao</li>
                          </ul>
                        </li>
                        <li><strong>2. Vận hành Smart Contract & Oracle</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Cập nhật: Smart Contract, Oracle feeds</li>
                          </ul>
                        </li>
                        <li><strong>3. Hệ thống DAO & Governance</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Triển khai & bảo trì: DAO voting, Governance proposals</li>
                          </ul>
                        </li>
                        <li><strong>4. Merchant & Payment Ecosystem</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Merchant onboarding</li>
                            <li>Quản lý payment gateway</li>
                          </ul>
                        </li>
                        <li><strong>5. Mobile Wallet & UX</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Giám sát ví mobile</li>
                            <li>Hỗ trợ cập nhật: Bảo mật, Kết nối RPC, Trải nghiệm người dùng</li>
                          </ul>
                        </li>
                        <li><strong>🔐 Bảo mật & Audit</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Cập nhật bảo mật định kỳ</li>
                            <li>Đơn vị audit bên thứ ba</li>
                            <li>Hỗ trợ xử lý finding sau audit</li>
                          </ul>
                        </li>
                        <li><strong>🎓 Đào tạo & đồng vận hành</strong>
                          <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                            <li>Đào tạo đội ngũ: Technical team, Operations team</li>
                          </ul>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  {/* Chi phí Phát triển */}
                  {/* <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      Chi phí Phát triển (Tháng)
                    </td>
                  </tr> */}
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Chi phí hàng tháng</td>
                    <td className="py-5 px-6 text-slate-300 text-center text-[20px] font-semibold border-r border-slate-700">$28,000/tháng</td>
                    <td className="py-5 px-6 text-yellow-500 text-center text-[20px] font-semibold border-r border-slate-700">$54,000/tháng</td>
                    <td className="py-5 px-6 text-red-400 text-center text-[20px] font-semibold">$84,000/tháng</td>
                  </tr>

                  {/* DAU */}
                  <tr className="bg-slate-900/30">
                    <td colSpan={4} className="py-4 px-6 font-bold text-lg text-[#F9D649]">
                      DAU (Daily Active User)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-5 px-6 text-slate-300 font-medium border-r border-slate-700">Số lượng người dùng</td>
                    <td className="py-5 px-6 text-slate-300 text-center text-[20px] font-semibold border-r border-slate-700">&lt;10K</td>
                    <td className="py-5 px-6 text-yellow-500 text-center text-[20px] font-semibold border-r border-slate-700">10K - 25K</td>
                    <td className="py-5 px-6 text-red-400 text-center text-[20px] font-semibold">25K - 50K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div id="feature-comparison" className="mb-12 scroll-mt-24">
          <h3 className="text-2xl font-bold mb-6 text-center">
            So sánh Tính năng Chi tiết
          </h3>
          <DataTable columns={comparisonColumns} data={comparisonData} />
        </div>

        {/* Operational Costs */}
        {/* <div id="operational-costs" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center scroll-mt-24">
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Khởi đầu
            </h4>
            <p className="text-2xl font-bold">
              $6,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Cơ bản
            </h4>
            <p className="text-2xl font-bold text-yellow-500">
              $12,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
            <h4 className="text-gray-400 text-sm mb-2">
              Chi phí Vận hành Nâng cao
            </h4>
            <p className="text-2xl font-bold text-red-500">
              $35,000{' '}
              <span className="text-sm font-normal text-gray-500">/tháng</span>
            </p>
          </div>
        </div> */}
      </Section>

      {/* Modals */}
      <Modal
        isOpen={openModal === 'Gói Khởi Đầu'}
        onClose={() => setOpenModal(null)}
        title="Gói khởi đầu"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Website & Landing Page</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Thiết kế trang giới thiệu Caratix, mô tả mô hình bảo chứng kim cương và cơ chế Proof-of-Reserve.</li>
                  <li>Tích hợp video giới thiệu, bảng quy đổi kim cương – token, và mô phỏng realtime chart.</li>
                  <li>Có mục "Whitepaper viewer" cho phép nhà đầu tư đọc trực tuyến.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Smart Contract BEP-20 (Testnet)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Phát triển token chuẩn BEP-20 và smart contract mô phỏng mint/burn CRT trên Binance Testnet.</li>
                  <li>Tích hợp chức năng xem Proof-of-Reserve mô phỏng, hiển thị tổng cung và dữ liệu giả lập kim cương lưu trữ.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Ví Demo (Wallet Mock)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Ví web đơn giản cho phép gửi/nhận CRT, kiểm tra số dư và lịch sử giao dịch trên testnet.</li>
                  <li>Kết nối với MetaMask testnet và TrustWallet.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Dashboard Quản trị</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Admin có thể xem danh sách người dùng, token supply, và lược sử giao dịch.</li>
                  <li>Cho phép import dữ liệu Proof-of-Reserve mô phỏng từ file CSV.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exchange (RWA) */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Exchange (RWA)</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Token hóa tài sản (Cơ bản)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>01 loại tài sản RWA (DIA)</li>
                  <li>Chuẩn token (ERC-20 hoặc tương đương)</li>
                  <li>Metadata tài sản: mô tả, chứng thư, hình ảnh</li>
                  <li>Gắn ID tài sản – truy xuất thủ công</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Quản lý tài sản</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Dashboard quản lý danh sách tài sản</li>
                  <li>Trạng thái: tạo – phát hành – khóa – thu hồi</li>
                  <li>Upload hồ sơ pháp lý (PDF/Image)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Giao dịch nội bộ (Internal Trading)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Chuyển token giữa các ví trong hệ thống</li>
                  <li>Không có order book công khai</li>
                  <li>Không hỗ trợ thanh khoản bên ngoài</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Ví người dùng</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Ví custodial (do hệ thống quản lý)</li>
                  <li>Nạp/rút nội bộ</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Quản trị hệ thống</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Admin quản lý user, tài sản, token</li>
                  <li>Phân quyền cơ bản</li>
                </ul>
              </div>
            </div>
          </div>

          {/* X402 */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">X402</h3>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Truy cập API dữ liệu kim cương qua X402</li>
              <li>Thanh toán theo từng request (micropayment)</li>
              <li>Không cần đăng ký tài khoản</li>
              <li>Không cần hợp đồng dài hạn</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 'Gói Cơ Bản'}
        onClose={() => setOpenModal(null)}
        title="Gói cơ bản"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Giao diện người dùng (Web + Wallet)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Website chính thức với branding Caratix.</li>
                  <li>Tích hợp ví Caratix Web Wallet: gửi, nhận, stake, redeem CRT.</li>
                  <li>Hiển thị realtime chart theo chỉ số DIAMINDX.</li>
                  <li>Dashboard người dùng: quản lý token, staking pool, lịch sử giao dịch.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Hệ thống backend & API Gateway</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Xây dựng backend bằng NestJS + PostgreSQL + Redis + RabbitMQ.</li>
                  <li>API phục vụ frontend, staking pool, Proof-of-Reserve data, và ví.</li>
                  <li>Kết nối với Oracle để lấy giá kim cương theo DIAMINDX.</li>
                  <li>REST API cho đối tác Merchant và DeFi protocol.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Smart Contract chính thức (BEP-20 Mainnet)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Phát triển token Caratix (CRT) BEP-20 chính thức.</li>
                  <li>Tích hợp cơ chế mint/burn có kiểm soát qua Proof-of-Reserve oracle.</li>
                  <li>Tích hợp staking pool smart contract.</li>
                  <li>Tích hợp Proof-of-Reserve dashboard on-chain, hiển thị tổng cung = tổng kim cương bảo chứng.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Admin Portal</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Giao diện quản trị dành cho đội Caratix Admin.</li>
                  <li>Chức năng: quản lý người dùng, staking pool, kiểm tra giao dịch, log hoạt động, quản lý reserve feed.</li>
                  <li>Xuất dữ liệu CSV hoặc API.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exchange (RWA) */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Exchange (RWA)</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Token hóa tài sản (Nâng cao)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Nhiều loại tài sản RWA (DIA, AU, AG, XAU,...)</li>
                  <li>Chuẩn token linh hoạt (ERC-20 / ERC-721 / ERC-1155)</li>
                  <li>Gắn tài sản vật lý với token (Asset Registry)</li>
                  <li>Trạng thái pháp lý rõ ràng cho từng tài sản</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Sàn giao dịch RWA</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Order Book (Buy / Sell)</li>
                  <li>Market & Limit Order</li>
                  <li>Lịch sử giao dịch</li>
                  <li>Biểu đồ giá</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. KYC & Compliance</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>KYC người dùng (eKYC)</li>
                  <li>Phân loại nhà đầu tư (Retail / Accredited)</li>
                  <li>Giới hạn giao dịch theo cấp độ</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Ví & thanh toán</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Ví custodial + non-custodial</li>
                  <li>Nạp/rút on-chain</li>
                  <li>Quản lý phí giao dịch</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Quản trị & vận hành</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Dashboard thống kê</li>
                  <li>Quản lý thanh khoản</li>
                  <li>Quản lý tài sản thế chấp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* X402 */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">X402</h3>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Đăng ký làm Merchant trên X402</li>
              <li>Bán dữ liệu / dịch vụ qua API</li>
              <li>Tự đặt giá (CRT)</li>
              <li>Nhận tiền tức thì vào ví (Atomic Settlement)</li>
              <li>P2P nội bộ</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 'Gói Nâng Cao'}
        onClose={() => setOpenModal(null)}
        title="Gói nâng cao"
      >
          <div className="space-y-8 text-base text-slate-200 leading-relaxed">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 font-semibold">LƯU Ý: ĐÃ BAO GỒM GÓI CƠ BẢN KÈM THEO</p>
          </div>

          {/* Phát triển phần mềm */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Phát triển phần mềm</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Hệ thống nền tảng</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Mở rộng: DeFi Vaults, Yield Farming, Lending integration.</li>
                  <li>Cross-chain Bridge BSC ↔ ETH (LayerZero/Axelar).</li>
                  <li>Wrapped CRT (wCRT) cho thanh khoản liên chuỗi.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Caratix Pay Network</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Thanh toán bằng CRT qua QR, SMS, hoặc mã merchant.</li>
                  <li>API cho đối tác bán lẻ, POS, sàn giao dịch.</li>
                  <li>Tích hợp chuyển đổi CRT ↔ fiat (tạm ứng).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Mobile Wallet (iOS & Android)</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Ứng dụng ví native hỗ trợ multi-chain CRT.</li>
                  <li>Chức năng: gửi/nhận, staking, QR payment, Auto-Compound.</li>
                  <li>Push notification, xác thực sinh trắc học, backup seed phrase.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. AI Price Engine & DAO</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Oracle engine định giá kim cương theo thuật toán AI từ dữ liệu 4C (Carat, Color, Clarity, Cut).</li>
                  <li>Caratix DAO v1: bỏ phiếu điều chỉnh phí, lãi suất staking, và phân phối reward.</li>
                  <li>Vault NFT quản lý kim cương bảo chứng.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exchange (RWA) */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">Exchange (RWA)</h3>
            
            <div className="space-y-6 ml-4">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">1. Token hóa RWA cấp doanh nghiệp</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Chuẩn hóa vòng đời tài sản (Mint → Trade → Redeem)</li>
                  <li>Gắn kho lưu trữ, đơn vị giám sát, oracle</li>
                  <li>Cơ chế redeem tài sản thực</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">2. Thanh khoản & DeFi</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Kết nối DEX / AMM</li>
                  <li>Pool thanh khoản RWA</li>
                  <li>Yield / Staking từ RWA</li>
                  <li>Lending – Borrowing (RWA-backed)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">3. Pháp lý & Compliance nâng cao</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Whitelist / Blacklist theo khu vực</li>
                  <li>Rule Engine theo quốc gia</li>
                  <li>Báo cáo tuân thủ & audit log</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">4. Bảo mật & kiểm toán</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Smart contract audit</li>
                  <li>Multisig / Timelock</li>
                  <li>Monitoring & alert</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white mb-3">5. Kiến trúc hệ thống</h4>
                <ul className="space-y-3 ml-6 list-disc text-base">
                  <li>Microservice / scalable</li>
                  <li>Multi-chain support</li>
                  <li>High availability & backup</li>
                </ul>
              </div>
            </div>
          </div>

          {/* X402 */}
          <div>
            <h3 className="text-2xl font-bold text-[#F9D649] mb-5">X402</h3>
            <ul className="space-y-2 ml-4 list-disc">
              <li>Ưu tiên truy cập Data Layer & API tốc độ cao</li>
              <li>Quyền tích hợp sâu (M2M / AI-to-API)</li>
              <li>Tham gia Diamond Hand Staking</li>
              <li>Nhận Real Yield từ X402 (AG)</li>
              <li>P2P đa quốc gia</li>
            </ul>
          </div>
        </div>
      </Modal>
    </Layout>;
}