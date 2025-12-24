import React from 'react';
interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
}
interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  description?: string;
}
export function DataTable<T>({
  columns,
  data,
  title,
  description
}: DataTableProps<T>) {
  return <div className="w-full my-8">
      {(title || description) && <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-slate-100">{title}</h3>}
          {description && <p className="text-sm text-slate-400">{description}</p>}
        </div>}
      <div className="rounded-md border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
              <tr>
                {columns.map((col, idx) => <th key={idx} className={`h-10 px-4 font-medium align-middle ${col.className || ''}`}>
                    {col.header}
                  </th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-950/50">
              {data.map((row, rowIdx) => <tr key={rowIdx} className="hover:bg-slate-900/50 transition-colors">
                  {columns.map((col, colIdx) => <td key={colIdx} className={`p-4 align-middle ${col.className || ''}`}>
                      {col.cell ? col.cell(row) : (row as any)[col.accessorKey as string]}
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}