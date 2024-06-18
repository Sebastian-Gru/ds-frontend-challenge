import { QueryClient, queryOptions } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { FEDERAL_MINISTRY_DATA_INFORMATION } from '../common/queryKeys';
import { getFederalMinistryDataInformation } from '../services/apiService';
import Dashboard from '../pages/Dashboard';
import LoadingPage from '../pages/LoadingPage';

export const federalMinistryDataInformationQueryOptions = queryOptions({
  queryKey: [FEDERAL_MINISTRY_DATA_INFORMATION],
  queryFn: getFederalMinistryDataInformation,
});

const queryClient = new QueryClient();

const loader = async () => {
  await queryClient.prefetchQuery({
    queryKey: [FEDERAL_MINISTRY_DATA_INFORMATION],
    queryFn: getFederalMinistryDataInformation,
  });

  return {
    federalMinistryDataInformation: queryClient.getQueryData([
      FEDERAL_MINISTRY_DATA_INFORMATION,
    ]),
  };
};

export const Route = createFileRoute('/')({
  loader,
  pendingComponent: LoadingPage,
  component: Dashboard,
});
