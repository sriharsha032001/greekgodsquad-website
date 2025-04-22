import React from 'react';

type DumbbellLoaderProps = {
  show: boolean;
};

export default function DumbbellLoader({ show }: DumbbellLoaderProps) {
  if (!show) return null;

  return (
    <div className="flex items-center justify-center py-8">
      <div className="relative w-20 h-20">
        {/* Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-gray-300 border-t-red-500 animate-spin" />

        {/* Dumbbell Image in Center */}
        <img
          src="./dumbbell.jpg" // Updated image path
          alt="Loading..."
          className="w-10 h-10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
    </div>
  );
}
