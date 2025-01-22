import { ButtonProps } from "@/app/lib/types/ui";
import { motion } from "framer-motion";

export default function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <div className="flex justify-center w-full">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className="px-6 py-3 bg-[#0996c7] text-white rounded-full hover:bg-[#0885b3] transition-colors flex items-center justify-center space-x-2 shadow-md"
      >
        {icon}
        <span>{text}</span>
      </motion.button>
    </div>
  );
}
