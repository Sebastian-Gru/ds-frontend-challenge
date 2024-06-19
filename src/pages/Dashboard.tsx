import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { federalMinistryDataInformationQueryOptions } from '../routes';
import DataTable from '../components/DataTable';
import { Checkbox, Text } from '@mantine/core';

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
  const [checked, setChecked] = useState(false);

  const filteredData = useMemo(() => {
    if (!federalMinistryDataInformation) return [];
    if (checked) {
      return federalMinistryDataInformation.filter((item) => item.description);
    }
    return federalMinistryDataInformation;
  }, [federalMinistryDataInformation, checked]);

  return (
    <div className="flex flex-col justify-center gap-4 items-left w-full h-full">
      <Text size="xl">Federal Ministry Datasets on GovData:</Text>
      <div className="px-4">
        <Text size="md" className="py-4">
          Filter:
        </Text>
        <Checkbox
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          label="Only departments with descriptions"
        />
      </div>
      <DataTable data={filteredData || []} columns={columns} />
    </div>
  );
};

export default Dashboard;
