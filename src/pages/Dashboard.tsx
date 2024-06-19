import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { federalMinistryDataInformationQueryOptions } from '../routes';
import DataTable from '../components/DataTable';

const Dashboard: React.FC = () => {
  const { data: federalMinistryDataInformation } = useSuspenseQuery(
    federalMinistryDataInformationQueryOptions,
  );

  const columns = [
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

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <DataTable
        data={federalMinistryDataInformation || []}
        columns={columns}
      />
    </div>
  );
};

export default Dashboard;
