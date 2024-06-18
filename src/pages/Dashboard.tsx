import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { federalMinistryDataInformationQueryOptions } from '../routes';

const Dashboard: React.FC = () => {
  const { data: federalMinistryDataInformation } = useSuspenseQuery(
    federalMinistryDataInformationQueryOptions,
  );
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-4xl font-bold mb-4">Department Data</h1>
      {federalMinistryDataInformation.map((data) => (
        <div key={data.department}>{data.department}</div>
      ))}
    </div>
  );
};

export default Dashboard;
