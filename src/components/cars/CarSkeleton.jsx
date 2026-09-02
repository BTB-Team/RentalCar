export const CarSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          {/* Image */}
          <div className="h-52 w-full animate-pulse bg-gray-200" />

          <div className="space-y-4 p-4">
            {/* Title */}
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

            {/* Tags */}
            <div className="flex gap-2">
              <div className="h-5 w-16 animate-pulse rounded-full bg-gray-200" />
              <div className="h-5 w-20 animate-pulse rounded-full bg-gray-200" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-4/6 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Button */}
            <div className="h-8 w-28 animate-pulse rounded-full bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};
