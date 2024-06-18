import { useQuery } from '@tanstack/react-query';
import { mockInit } from './services/apiMock';
import { getFederalMinistryDataInformation } from './services/apiService';

const App: React.FC = () => {
  if (import.meta.env.VITE_MOCK === 'true') {
    mockInit();
  }

  const query = useQuery({
    queryKey: ['Federal_Ministry_Data_Information'],
    queryFn: getFederalMinistryDataInformation,
  });

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-4xl font-bold mb-4">Department Data</h1>
      {query.data?.map((data) => <p>{data.department}</p>)}
    </div>
  );
};

export default App;
