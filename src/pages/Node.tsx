import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { DataTable } from '../components/DataTable';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { TrendingUp, Users, Shield, Award } from 'lucide-react';
export function Node() {
  const nodeTiers = [{
    tier: '1. Cộng đồng',
    price: '10,000 CTX',
    max: '5,000',
    roi: '2.0x',
    utility: 'Thanh khoản Sớm',
    desc: 'ROI cao nhất cho người tham gia sớm.'
  }, {
    tier: '2. Giám sát',
    price: '25,000 CTX',
    max: '3,000',
    roi: '1.5x',
    utility: 'Quản trị',
    desc: 'Quyền bỏ phiếu + ROI cao.'
  }, {
    tier: '3. Xác thực',
    price: '50,000 CTX',
    max: '1,500',
    roi: '1.2x',
    utility: 'Ổn định',
    desc: 'Trọng số bỏ phiếu cao.'
  }, {
    tier: '4. Chủ quyền',
    price: '100,000 CTX',
    max: '500',
    roi: '1.0x',
    utility: 'Veto & Chia sẻ Phí',
    desc: 'Kiểm soát tối đa & Real Yield.'
  }];
  const nodeColumns = [{
    header: 'Tên Tier',
    accessorKey: 'tier' as const,
    className: 'font-medium'
  }, {
    header: 'Giá (CTX)',
    accessorKey: 'price' as const
  }, {
    header: 'Node Tối đa',
    accessorKey: 'max' as const
  }, {
    header: 'Hệ số ROI',
    accessorKey: 'roi' as const,
    cell: (item: any) => <Badge variant={item.roi === '2.0x' ? 'success' : 'secondary'}>
          {item.roi}
        </Badge>
  }, {
    header: 'Tiện ích',
    accessorKey: 'utility' as const
  }, {
    header: 'Mô tả',
    accessorKey: 'desc' as const,
    className: 'text-slate-400 text-xs'
  }];
  return <Layout>
      <Section title="Node & Tokenomics" subtitle="Mô hình Inverse ROI: Thưởng cho người tin tưởng sớm.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Chiến lược Inverse ROI</h3>
            <p className="text-slate-400 leading-relaxed">
              Khác với các mô hình truyền thống, Caratix thưởng lớn nhất cho
              những người tham gia sớm nhất với hệ số cao nhất. Khi mạng lưới
              phát triển, hệ số ROI giảm dần, chuyển giá trị từ phần thưởng lạm
              phát sang Real Yield (chia sẻ phí) và quyền lực Quản trị.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-900/50">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <TrendingUp className="h-8 w-8 text-emerald-500 mb-2" />
                  <span className="font-bold text-lg">2.0x</span>
                  <span className="text-xs text-slate-500">Hệ số Tối đa</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-900/50">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Shield className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="font-bold text-lg">250M</span>
                  <span className="text-xs text-slate-500">CTX Đã Khóa</span>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-8 flex flex-col justify-center">
            <h4 className="font-bold mb-4">Các Giai đoạn Đầu tư</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h5 className="font-semibold text-emerald-400">
                    Người Tiên phong (Tier 1)
                  </h5>
                  <p className="text-sm text-slate-400">
                    Chi phí thấp, ROI tối đa. Tạo Alpha.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h5 className="font-semibold text-blue-400">
                    Đối tác Chiến lược (Tier 2-3)
                  </h5>
                  <p className="text-sm text-slate-400">
                    ROI cân bằng + Quyền lực Quản trị.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h5 className="font-semibold text-purple-400">
                    Tổ chức (Tier 4)
                  </h5>
                  <p className="text-sm text-slate-400">
                    Kiểm soát, Quyền Veto, Chia sẻ Phí.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Cấu trúc Tier Node</h3>
          <DataTable columns={nodeColumns} data={nodeTiers} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Users className="h-6 w-6 text-slate-400 mb-4" />
              <h4 className="font-bold mb-2">Cộng đồng Dẫn dắt</h4>
              <p className="text-sm text-slate-400">
                10,000 tổng số node có sẵn cho công chúng.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Award className="h-6 w-6 text-slate-400 mb-4" />
              <h4 className="font-bold mb-2">Real Yield</h4>
              <p className="text-sm text-slate-400">
                Node Tier 4 kiếm từ doanh thu nền tảng, không chỉ lạm phát.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-6 w-6 text-slate-400 mb-4" />
              <h4 className="font-bold mb-2">Bảo chứng Tài sản</h4>
              <p className="text-sm text-slate-400">
                Giá trị node được hỗ trợ bởi nền kinh tế kim cương cơ bản.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </Layout>;
}