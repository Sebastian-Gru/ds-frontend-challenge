import { FederalMinistryDataInformation } from '../models/FederalMinistry';
import { apiClient } from './apiClient';

export const getFederalMinistryDataInformation = async (): Promise<
  FederalMinistryDataInformation[]
> => {
  return (
    await apiClient.get<FederalMinistryDataInformation[]>(
      '/federalMinistryDataInformation',
    )
  ).data;
};
