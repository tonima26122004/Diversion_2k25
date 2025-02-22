import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="w-full p-5 bg-[#E4E2D6] animate-pulse rounded-lg shadow-md flex flex-col gap-3"
        >
          {/* Title Placeholder */}
          <div className="h-6 bg-gray-400 rounded w-3/4"></div>

          {/* Date Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>

          {/* Content Placeholder */}
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>

          {/* Button Placeholder */}
          <div className="h-8 bg-gray-400 rounded w-24 mt-3"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
