import React from 'react';
interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (item: T) => React.ReactNode;
  className?: string;
  rowSpan?: (item: T, rowIndex: number) => number | undefined;
  hideCell?: (item: T, rowIndex: number) => boolean;
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
          {title && <h3 className="text-lg font-semibold text-[#F9D649]">{title}</h3>}
          {description && <p className="text-sm text-gray-400">{description}</p>}
        </div>}
      <div className="rounded-md border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-base text-left">
            <thead className="bg-gray-900 text-gray-300 h-[100px] border-b border-gray-800">
              <tr>
                {columns.map((col, idx) => <th key={idx} className={`h-14 px-6 font-semibold align-middle border-r border-gray-700 last:border-r-0 ${col.className || ''}`}>
                    {col.header}
                  </th>)}
              </tr>
            </thead>
            <tbody className="bg-black/50">
              {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-900/50 transition-colors border-b border-gray-800">
                  {columns.map((col, colIdx) => {
                    if (col.hideCell?.(row, rowIdx)) return null;

                    const baseClassName = col.className || 'text-slate-300';
                    const classNameWithoutBorder = baseClassName
                      .replace(/border-r[^ ]*/g, '')
                      .trim();

                    const rowspan = col.rowSpan?.(row, rowIdx);
                    
                    return (
                      <td
                        key={colIdx}
                        rowSpan={rowspan}
                        className={`py-3 px-2 align-middle h-[100px] border border-gray-700 last:border-r-0 ${classNameWithoutBorder}`}
                      >
                        {col.cell
                          ? col.cell(row)
                          : (row as any)[col.accessorKey as string]}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}