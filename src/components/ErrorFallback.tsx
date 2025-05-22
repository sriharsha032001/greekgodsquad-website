import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-300 mb-4">
          {error?.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
          aria-label="Try again"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback; 