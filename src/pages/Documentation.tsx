import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { FileText, Code, AlertTriangle, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';
export function Documentation() {
  const docs = [{
    title: 'Whitepaper',
    desc: 'Luận điểm kỹ thuật và kinh tế đầy đủ của Caratix Protocol.',
    icon: FileText,
    action: 'Đọc PDF'
  }, {
    title: 'Tokenomics',
    desc: 'Phân tích chi tiết về phân bổ, lịch trình vesting và đường cong phát hành.',
    icon: BookOpen,
    action: 'Xem Chi tiết'
  }, {
    title: 'Tổng quan Kỹ thuật',
    desc: 'Sơ đồ kiến trúc, địa chỉ smart contract và tài liệu API.',
    icon: Code,
    action: 'Xem Tài liệu'
  }, {
    title: 'Cảnh báo Rủi ro',
    desc: 'Thông tin quan trọng về rủi ro RWA, tuân thủ quy định và biến động.',
    icon: AlertTriangle,
    action: 'Đọc Thông báo'
  }];
  return <Layout>
      <Section title="Tài Liệu" subtitle="Tài nguyên chỉ đọc cho nhà đầu tư và nhà phát triển.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {docs.map(doc => <Card key={doc.title} className="hover:border-slate-700 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <doc.icon className="h-6 w-6 text-slate-300" />
                </div>
                <CardTitle className="text-lg">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-6 h-12">{doc.desc}</p>
                <Button variant="outline" className="w-full">
                  {doc.action}
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </Section>
    </Layout>;
}