// src/components/DataGrid.tsx

import React, { useState, useRef } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual'; // 1. Import the virtualizer
import styles from './DataGrid.module.css';

interface DataGridProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const DataGrid = <TData,>({ data, columns }: DataGridProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  // 2. Set up the virtualizer
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 34, // Estimate the height of a row
    overscan: 10,
  });

  return (
    // 3. Add the ref to the container
    <div ref={tableContainerRef} className={styles.container}>
      <table className={styles.table} role="grid">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} role="row">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  role="columnheader"
                  className={styles.sortableHeader}
                  onClick={header.column.getToggleSortingHandler()}
                  aria-sort={
                    header.column.getIsSorted() === 'asc'
                      ? 'ascending'
                      : header.column.getIsSorted() === 'desc'
                      ? 'descending'
                      : undefined
                  }
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{ asc: ' 🔼', desc: ' 🔽' }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* 4. Refactor the tbody for virtualization */}
        <tbody style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: 'relative' }}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = rows[virtualRow.index];
            return (
              <tr
                key={row.id}
                role="row"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                  position: 'absolute',
                  width: '100%',
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} role="gridcell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};