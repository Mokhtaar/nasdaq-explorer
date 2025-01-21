import { StockCardProps } from "../../lib/types/stock";

export default function StockCard({ ticker, name }: StockCardProps) {
  return (
    <article className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
      <header>
        <h2 className="text-xl font-bold text-white">{ticker}</h2>
        <p className="text-gray-400 mt-1 truncate">{name}</p>
      </header>
    </article>
  );
}
