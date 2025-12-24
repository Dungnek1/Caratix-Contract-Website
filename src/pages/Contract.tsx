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
    cost: '$9000',
    detail: [
      'Smart Contract: token chính (BEP-20/ERC-20), staking/vault, oracle, bridge.',
      'Hạ tầng node/RPC: ít nhất 2 nguồn RPC + dự phòng (QuickNode, Infura, Alchemy).',
      'Backend & API Gateway: NestJS/Go + DB (PostgreSQL/Redis) + CI/CD.',
      'Frontend DApp: Next.js + WalletConnect/MetaMask + ví riêng (Caratix Wallet).',
      'Monitoring: Grafana, Prometheus, Alert system.',
      'Backup & Security Layer: Cloudflare, SSL, firewall, auto-snapshot DB.'
    ]
  }, {
    id: 2,
    name: 'Quản trị & bảo mật',
    desc: 'Multisig, Audit',
    cost: '$9000',
    detail: [
      'Multisig treasury (Gnosis Safe) cho toàn bộ ví dự án.',
      'Timelock contract để tránh thao tác đột ngột.',
      'Audit & bug bounty (CertiK/PeckShield + chương trình cộng đồng).',
      'Key management: dùng ví lạnh/HSM, không để private key máy chủ.'
    ]
  }, {
    id: 3,
    name: 'Nạp / Rút',
    desc: 'Kiến trúc ví',
    cost: '$9000',
    detail: [
      'Luồng tài sản & kiến trúc ví.',
      'Quản lý & bảo mật nạp/rút tiền.',
      'Bảo vệ kho quỹ (Multisig & Timelock).',
      'Quản trị rủi ro, giám sát & xử lý khẩn cấp.'
    ]
  }, {
    id: 4,
    name: 'Tokenomics & kho quỹ',
    desc: 'Treasury, Staking',
    cost: '$9000',
    detail: [
      'Rõ ràng phân bổ (allocation, vesting, cliff).',
      'Treasury management: multisig + dashboard theo dõi.',
      'Proof-of-Reserve minh bạch (như Caratix dùng chip NFC + Oracle).',
      'Chính sách staking/reward + pool thanh khoản (DEX/CEX).'
    ]
  }, {
    id: 5,
    name: 'Pháp lý & KYC/Compliance',
    desc: 'KYC / Tuân thủ',
    cost: '$9000',
    detail: [
      'Chính sách KYC/AML: tích hợp đối tác eKYC.',
      'Privacy Policy, Terms of Use, Risk Disclosure rõ ràng.'
    ]
  }, {
    id: 6,
    name: 'Tài chính & kiểm toán',
    desc: 'Báo cáo & Kiểm toán',
    cost: '$1000',
    detail: [
      'Báo cáo định kỳ: số dư treasury, staking reward, chi phí.',
      'Kiểm toán định kỳ: code audit + tài chính (bên thứ ba).',
      'Bảng quản lý chi phí on-chain (ví team, ví partner, ví cộng đồng).'
    ]
  }, {
    id: 7,
    name: 'Chăm sóc khách hàng',
    desc: 'Giám sát 24/7',
    cost: 'chưa chốt',
    detail: [
      'Đội vận hành 24/7: giám sát smart contract, staking pool, node.',
      'Cập nhật định kỳ: upgrade SC, thêm pool, fix lỗi.',
      'Cộng đồng & hỗ trợ người dùng: Telegram/Discord + ticket system.',
      'Kênh truyền thông chính thức: Website, X, Medium, Announcement channel.'
    ]
  }];
  const operationsColumns = [{
    header: 'STT',
    accessorKey: 'id' as const,
    className: 'w-12 text-gray-500 align-top'
  }, {
    header: 'Nội dung',
    accessorKey: 'name' as const,
    className: 'font-medium align-top'
  }, {
    header: 'Chi tiết',
    accessorKey: 'detail' as const,
    className: 'text-gray-400 text-xs md:text-sm align-top',
    cell: (row: any) => (
      <div className="space-y-1">
        {Array.isArray(row.detail) ? (
          row.detail.map((line: string, idx: number) => (
            <div key={idx} className="flex items-start">
              <span className="text-white mr-2 mt-1">•</span>
              <span>{line}</span>
            </div>
          ))
        ) : (
          <div className="flex items-start">
            <span className="text-white mr-2 mt-1">•</span>
            <span>{row.detail}</span>
          </div>
        )}
      </div>
    )
  }, {
    header: 'Chi phí',
    accessorKey: 'cost' as const,
    rowSpan: (_item: any, rowIndex: number) => (rowIndex === 0 ? 5 : undefined),
    hideCell: (_item: any, rowIndex: number) => rowIndex > 0 && rowIndex < 5,
    className: 'text-center align-middle',
    cell: (row: any) => (
      <div className="flex items-center text-[20px] justify-center h-full">
        {row.cost !== '—' && row.cost !== 'chưa chốt' ? (
          <Badge variant="secondary">{row.cost}</Badge>
        ) : (
          <span className="text-gray-400">{row.cost}</span>
        )}
      </div>
    )
  }];
  return <Layout>
    <Section title="Caratix Contract" subtitle="Khung vận hành và thông số kỹ thuật.">
      <div id="overview" className="mb-16 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-6 text-[#F9D649]">Tổng quan Vận hành</h3>
        <DataTable columns={overviewColumns} data={overviewData} />
      </div>

      <div id="operations-detail" className="mb-16 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-6 text-[#F9D649]">
          Bảng Vận hành dự án cơ bản
        </h3>
        <DataTable columns={operationsColumns} data={operationsData} description="Phân tích chi tiết các thành phần vận hành và chi phí liên quan." />
      </div>

      <div id="tech-security" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 scroll-mt-24">
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30">
          <h4 className="font-bold text-lg mb-4 text-[#F9D649]">
            Công nghệ Sử dụng
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 list-disc pl-4">
            <li>Frontend Next.js (App Router)</li>
            <li>Backend NestJS / Go</li>
            <li>Database PostgreSQL / Redis</li>
            <li>Smart Contracts (Solidity)</li>
            <li>Triển khai Vercel</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/30">
          <h4 className="font-bold text-lg mb-4 text-[#F9D649]">
            Bảo mật & Tuân thủ
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 list-disc pl-4">
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