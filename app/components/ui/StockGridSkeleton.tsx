export function StockGridSkeleton() {
  return (
    <div className="col-span-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-4 animate-pulse"
          role="status"
          aria-label="Loading stock data"
        >
          <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}
