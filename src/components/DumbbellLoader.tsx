import React from 'react';

type DumbbellLoaderProps = {
  show: boolean;
};

export default function DumbbellLoader({ show }: DumbbellLoaderProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-20 h-20">
        {/* Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-300 border-t-red-500 animate-spin" />

        {/* Dumbbell Image in Center */}
        <img
          src="./dumbbell.jpg"
          alt="Loading..."
          className="w-10 h-10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
    </div>
  );
}
