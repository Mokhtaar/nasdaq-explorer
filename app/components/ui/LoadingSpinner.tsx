import { LoadingSpinnerProps } from "../../lib/types/ui";

export default function LoadingSpinner({
  fullPage = false,
}: LoadingSpinnerProps) {
  const size = fullPage ? "w-24 h-24" : "w-12 h-12";
  const textSize = fullPage ? "text-xl" : "text-sm";

  return (
    <>
      <div className={`relative ${size}`}>
        <div className="absolute inset-0 border-t-4 border-green-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-r-4 border-blue-500 rounded-full animate-ping"></div>
        <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
          <div className={`text-white ${textSize} font-bold`}>$</div>
        </div>
      </div>
      {fullPage && (
        <p className="text-sm text-gray-400 mt-8 animate-pulse">
          Loading market data...
        </p>
      )}
    </>
  );
}
