import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card, CardTitle, CardContent } from '../components/ui/Card';
import { ArrowRight, ShieldCheck, Database, Zap, Globe, Lock, Activity } from 'lucide-react';
export function Landing() {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-slate-400 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
            Giao thức RWA cấp Tổ chức
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">
            Caratix Protocol
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hạ tầng RWA & Bảo chứng Kim cương cấp Tổ chức. Token hóa tài sản bền
            vững nhất thế giới với tính minh bạch Proof-of-Reserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contract">
              <Button size="lg" className="w-full sm:w-auto">
                Xem Hợp Đồng
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Xem Báo Giá
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is Caratix */}
      <Section title="Caratix là gì?" subtitle="Kết nối kim cương vật lý với thanh khoản kỹ thuật số thông qua hạ tầng blockchain tiên tiến.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-slate-900/40 border-slate-800">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="mb-2">Token hóa Kim cương</CardTitle>
              <p className="text-slate-400">
                Tài sản thực (RWA) được đưa lên chuỗi với sự bảo chứng pháp lý
                và lưu trữ vật lý.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/40 border-slate-800">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="mb-2">Proof-of-Reserve</CardTitle>
              <p className="text-slate-400">
                Xác minh minh bạch, có thể kiểm toán về tài sản vật lý bảo chứng
                cho mỗi token đang lưu thông.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/40 border-slate-800">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                <Activity className="h-6 w-6" />
              </div>
              <CardTitle className="mb-2">Real Yield</CardTitle>
              <p className="text-slate-400">
                Lợi nhuận bền vững từ phí giao dịch và hoạt động kinh tế thực,
                không phải lạm phát.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Caratix */}
      <Section className="bg-slate-900/20" title="Tại sao chọn Caratix?" subtitle="Được xây dựng cho sự bền vững, bảo mật và chấp nhận tổ chức.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Zap className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inverse ROI Node</h3>
                <p className="text-slate-400">
                  Cấu trúc node sáng tạo thưởng cho người tham gia sớm với hệ số
                  cao hơn, tạo nhu cầu tự nhiên.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Lock className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bảo chứng RWA</h3>
                <p className="text-slate-400">
                  Mỗi token CRT được bảo chứng bởi dự trữ kim cương đã kiểm
                  toán, mang lại sự ổn định giá và giá trị nội tại.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Globe className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quản trị DAO</h3>
                <p className="text-slate-400">
                  Kiểm soát phi tập trung cho phép cộng đồng bỏ phiếu về các
                  thông số giao thức và sử dụng kho bạc.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
            <Card className="relative bg-slate-950 border-slate-800 h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  250M
                </div>
                <div className="text-xl text-slate-400">CTX Đã Khóa</div>
                <div className="mt-8 text-sm text-slate-500">
                  Cơ chế giảm nguồn cung đang hoạt động
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Modules */}
      <Section title="Các Module Cốt Lõi" subtitle="Những khối xây dựng của hệ sinh thái Caratix.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Token (CRT / CTX)', 'Hạ tầng Node', 'Marketplace RWA', 'Caratix Pay', 'Oracle & Định giá AI', 'Quản trị DAO', 'Staking Vaults', 'Cầu nối Cross-chain'].map(item => <Card key={item} className="text-center hover:bg-slate-900 transition-colors cursor-default">
              <CardContent className="p-6">
                <span className="font-medium">{item}</span>
              </CardContent>
            </Card>)}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng tham gia tương lai của RWA?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Khám phá chi tiết hợp đồng, các gói báo giá và tài liệu của chúng
            tôi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contract">
              <Button size="lg" variant="outline">
                Xem Hợp Đồng
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg">Xem Báo Giá</Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" variant="secondary">
                Tài Liệu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
}