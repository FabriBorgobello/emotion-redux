import { useFormContext } from "react-hook-form";
import { motion } from "framer-motion";

import { FormErrorMessage } from "./ui/form-error-message";
import { Input } from "./ui/input";

export function TaskInput({ name }: { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = errors[name];
  const errorMessage = errors[name]?.message?.toString();

  return (
    <motion.div>
      <Input placeholder="Enter a task" {...register(name)} />
      {hasError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </motion.div>
  );
}
