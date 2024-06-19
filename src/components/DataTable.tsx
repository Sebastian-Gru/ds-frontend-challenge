import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from '@tanstack/react-table';
import { Table as MantineTable, Container, ScrollArea } from '@mantine/core';

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

const DataTable = <TData,>({ data, columns }: DataTableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Container>
      <ScrollArea>
        <MantineTable className="w-full h-full">
          <MantineTable.Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <MantineTable.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <MantineTable.Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="text-left cursor-pointer text-xl whitespace-nowrap bg-cyan-600 border border-cyan-700 text-white px-4 py-2"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? ' 🖱️'}
                  </MantineTable.Th>
                ))}
              </MantineTable.Tr>
            ))}
          </MantineTable.Thead>
          <MantineTable.Tbody>
            {table.getRowModel().rows.map((row) => (
              <MantineTable.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <MantineTable.Td key={cell.id} className="font-medium">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </MantineTable.Td>
                ))}
              </MantineTable.Tr>
            ))}
          </MantineTable.Tbody>
        </MantineTable>
      </ScrollArea>
    </Container>
  );
};

export default DataTable;
