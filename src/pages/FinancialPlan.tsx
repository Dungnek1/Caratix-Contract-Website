import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { DataTable } from '../components/DataTable';
export function FinancialPlan() {
  const planT12 = [{
    category: 'Khởi tạo ban đầu',
    work: ['UX/UI Start', 'Tài liệu, tài nguyên'],
    detail: ['','Devops, duy trì sever, backend, frontend, làm tài liệu Marketing '],
    cost: ['$5500', '$2500'],
    paymentDate: ['', 'Ngày 4 hàng tháng'],
    status: 'Chưa nhận',
    note: ['', 'Máy móc, công cụ, thư mục hỗ trợ làm việc']
  }, {
    category: 'Phát triển tính năng',
    work: '2 tính năng đề xuất',
    detail: 'ICO, Staking',
    cost: '$9000',
    paymentDate: '15/12/2025',
    status: 'Chưa nhận',
    note: ''
  }, {
    category: 'Chi phí vận hành hàng tháng',
    work: 'Các chức năng của dự án',
    detail: 'Vận hành, quản lý các module bên trong dự án (DASHBOARD ADMIN)-> ICO, Staking, duy trì web admin',
    cost: '$3000',
    paymentDate: '15/12/2025',
    status: 'Chưa nhận',
    note: '14 công nhân làm việc 8 tiếng'
  }, {
    category: 'Chi phí vận hành hàng tháng',
    work: 'Hỗ trợ chăm sóc KH',
    detail: 'Chăm sóc khách hàng khi NẠP RÚT hoặc phát sinh lỗi, hỗ trợ tư vấn giải pháp cho dự án',
    cost: '$1500',
    paymentDate: '',
    status: 'Chưa nhận',
    note: '4 công nhân làm việc 8 tiến'
  }, {
    category: 'Chi phí tài sản thiết bị',
    work: '2 Macbook',
    detail: '',
    cost: '$4000',
    paymentDate: '',
    status: 'Chưa nhận',
    note: 'Mới, chưa active'
  }, {
    category: '',
    work: '1 iPhone',
    detail: '',
    cost: '',
    paymentDate: '',
    status: 'Chưa nhận',
    note: 'Mới, chưa active'
  }];
  const planT1 = [{
    category: 'Chi phí tài nguyên hàng tháng',
    work: 'Tài liệu & tài nguyên',
    detail: 'Devops, duy trì sever, backend, frontend, làm tài liệu Marketing, làm docs, video',
    cost: '2500 USD',
    paymentDate: 'Ngày 4 hàng tháng',
    status: 'Chưa nhận',
    note: 'Máy móc, công cụ, thư mục hỗ trợ làm việc'
  }, {
    category: 'Phát triển tính năng',
    work: '2 tính năng đề xuất',
    detail: '402, Marketplace',
    cost: '15000 USD',
    paymentDate: '15/01/2026',
    status: 'Chưa nhận',
    note: ''
  }, {
    category: 'Chi phí vận hành hàng tháng',
    work: ['Các chức năng của dự án', 'Hỗ trợ chăm sóc KH'],
    detail: ['Vận hành, quản lý các module bên trong dự án (DASHBOARD ADMIN)-> ICO, Marketplace, Staking, duy trì web admin', 'Chăm sóc khách hàng khi NẠP RÚT hoặc phát sinh lỗi, hỗ trợ tư vấn giải pháp cho dự án'],
    cost: ['3000 USD', '1500 USD'],
    paymentDate: ['15/01/2026', ''],
    status: 'Chưa nhận',
    note: ['14 công nhân làm việc 8 tiếng', '4 công nhân làm việc 8 tiến']
  }];
  const columnsT12 = [{
    header: 'Tiêu đề',
    accessorKey: 'category' as const,
    className: 'font-semibold text-white text-base min-w-[180px]'
  }, {
    header: 'Công việc',
    accessorKey: 'work' as const,
    className: 'text-slate-300 text-base min-w-[200px]',
    cell: (item: any) => (
      <div className="space-y-2">
        {Array.isArray(item.work) ? (
          item.work.map((w: string, idx: number) => (
            <div key={idx} className="border-b border-gray-800 last:border-b-0 pb-2 last:pb-0">
              {w}
            </div>
          ))
        ) : (
          <div>{item.work}</div>
        )}
      </div>
    )
  }, {
    header: 'Chi tiết',
    accessorKey: 'detail' as const,
    className: 'text-gray-400 text-sm min-w-[150px]',
    cell: (item: any) => (
      <div className="space-y-2">
        {Array.isArray(item.detail) ? (
          item.detail.map((d: string, idx: number) => (
            <div key={idx} className="border-b border-gray-800 last:border-b-0 pb-2 last:pb-0">
              {d || '-'}
            </div>
          ))
        ) : (
          <div>{item.detail || '-'}</div>
        )}
      </div>
    )
  }, {
    header: 'Chi phí',
    accessorKey: 'cost' as const,
    className: 'font-mono text-white text-base text-center font-semibold min-w-[120px] align-middle',
    rowSpan: (_item: any, rowIndex: number) => {
      // Gộp 2 hàng "Chi phí tài sản thiết bị" (index 4 và 5)
      if (rowIndex === 4) return 2;
      return undefined;
    },
    hideCell: (_item: any, rowIndex: number) => {
      // Ẩn cell ở hàng "1 iPhone" (index 5)
      return rowIndex === 5;
    },
    cell: (item: any) => (
      <div className="space-y-2">
        {Array.isArray(item.cost) ? (
          item.cost.map((c: string, idx: number) => (
            <div key={idx} className="border-b border-gray-800 last:border-b-0 pb-2 last:pb-0">
              {c}
            </div>
          ))
        ) : (
          <div>{item.cost || '-'}</div>
        )}
      </div>
    )
  }, {
    header: 'Ngày thanh toán',
    accessorKey: 'paymentDate' as const,
    className: 'text-gray-400 text-sm min-w-[140px] align-middle',
    rowSpan: (item: any, rowIndex: number) => {
      // Gộp 2 hàng "Chi phí vận hành hàng tháng" ở tháng 12/2025 (index 2 và 3)
      // Chỉ gộp nếu category là "Chi phí vận hành hàng tháng" và paymentDate là "15/12/2025"
      if (rowIndex === 2 && item.category === 'Chi phí vận hành hàng tháng' && item.paymentDate === '15/12/2025') {
        return 2;
      }
      return undefined;
    },
    hideCell: (item: any, rowIndex: number) => {
      // Ẩn cell ở hàng thứ 2 của "Chi phí vận hành hàng tháng" (index 3)
      if (rowIndex === 3 && item.category === 'Chi phí vận hành hàng tháng') {
        return true;
      }
      return false;
    },
    cell: (item: any) => (
      <div>{item.paymentDate || '-'}</div>
    )
  }, {
    header: 'Ghi chú',
    accessorKey: 'note' as const,
    className: 'text-gray-500 text-sm min-w-[180px]',
    cell: (item: any) => (
      <div className="space-y-2">
        {Array.isArray(item.note) ? (
          item.note.map((n: string, idx: number) => (
            <div key={idx} className="border-b border-gray-800 last:border-b-0 pb-2 last:pb-0">
              {n || '-'}
            </div>
          ))
        ) : (
          <div>{item.note || '-'}</div>
        )}
      </div>
    )
  }];
  return <Layout>
      <Section title="Kế Hoạch Tài Chính" subtitle="Phân tích chi phí và lịch trình phân bổ.">
        <div id="financial-overview" className="space-y-12 scroll-mt-24">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#F9D649]">Tháng 12/2025</h3>
              <h3  className="text-[24px] text-[#F9D649] px-3 py-1">
                Tổng: $25,500
              </h3>
            </div>
            <DataTable columns={columnsT12} data={planT12} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#F9D649]">Tháng 1/2026</h3>
              <h3  className="text-[24px] text-[#F9D649] px-3 py-1">
                Tổng: $22,000
              </h3>
            </div>
            <DataTable columns={columnsT12} data={planT1} />
          </div>
        </div>

        <div id="budget-details" className="mt-16 p-8 rounded-xl border border-gray-800 bg-gray-900/20 scroll-mt-24">
          <h3 className="text-lg font-bold mb-4 text-[#F9D649]">Lưu ý Lịch Thanh toán</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
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