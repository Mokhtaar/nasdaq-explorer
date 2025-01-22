import { StockCardProps } from "../../lib/types/stock";
import { motion } from "framer-motion";

export default function StockCard({ ticker, name }: StockCardProps) {
  return (
    <motion.article
      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <header>
        <h2 className="text-xl font-bold text-white">{ticker}</h2>
        <p className="text-gray-400 mt-1 truncate">{name}</p>
      </header>
    </motion.article>
  );
}
