import { motion } from "framer-motion";

export function FormErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ y: -5, opacity: 1 }}
      initial={{ y: 0, opacity: 0 }}
      exit={{ y: -5, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="mt-3"
    >
      <p className="text-sm font-semibold text-red-500">{children}</p>
    </motion.div>
  );
}
