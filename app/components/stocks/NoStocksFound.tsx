export default function NoStocksFound() {
  return (
    <div
      className="col-span-full flex flex-col items-center justify-center p-8 text-white"
      role="status"
      aria-live="polite"
    >
      <p className="text-xl mb-2">No stocks found</p>
      <p className="text-sm">Try adjusting your search terms</p>
    </div>
  );
}
