import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import DataTable from '../components/DataTable';
import { ColumnDef } from '@tanstack/react-table';

// Define the data and columns for the test
interface Data {
  department: string;
  description: string;
  datasets: number;
}

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'department',
    header: 'Department',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'datasets',
    header: 'Datasets',
  },
];

const data: Data[] = [
  { department: 'Dept A', description: 'Desc A', datasets: 10 },
  { department: 'Dept B', description: 'Desc B', datasets: 20 },
];

test('renders DataTable component', () => {
  render(
    <MantineProvider>
      <DataTable data={data} columns={columns} />
    </MantineProvider>,
  );

  // Check for the presence of the data rows
  expect(screen.getByText('Dept A')).toBeInTheDocument();
  expect(screen.getByText('Desc A')).toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
  expect(screen.getByText('Dept B')).toBeInTheDocument();
  expect(screen.getByText('Desc B')).toBeInTheDocument();
  expect(screen.getByText('20')).toBeInTheDocument();
});
