import MockAdapter from 'axios-mock-adapter';
import { apiClient } from './apiClient';
import mockData from '../__tests__/mocks/backend-response.json';

const mock = new MockAdapter(apiClient, {
  onNoMatch: 'passthrough',
});

export const mockInit = () => {
  mock.onGet('/federalMinistryDataInformation').reply(200, mockData);
};
