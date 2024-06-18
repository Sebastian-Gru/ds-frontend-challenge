import React from 'react';
import { AxiosError } from 'axios';

interface ErrorPageProps {
  error: unknown;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
  const getErrorMessage = (error: unknown) => {
    if (error instanceof AxiosError) {
      return `${error.name}: ${error.message} ${error.response?.statusText || ''} ... `;
    } else if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return 'An unknown error occurred.';
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-80"
      data-testid="error"
    >
      <h1 className="text-2xl font-bold text-gray-600">
        {getErrorMessage(error)}
      </h1>
    </div>
  );
};

export default ErrorPage;
