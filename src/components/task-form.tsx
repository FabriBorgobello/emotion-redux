import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { CategoryCombobox } from "./category-combobox";
import { TaskInput } from "./task-input";

import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/constants";
import { taskInputSchema,TaskInputType } from "@/schemas/task-schema";
import { addTask } from "@/slices/task-slice";
import { AppDispatch } from "@/store";

export function TaskForm() {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<TaskInputType>({
    resolver: zodResolver(taskInputSchema),
    defaultValues: {
      category: CATEGORIES[0],
      title: "",
    },
  });

  function onSubmit(values: TaskInputType) {
    dispatch(addTask(values));
    form.reset();
  }
  return (
    <FormProvider {...form}>
      <motion.form
        layout
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        <TaskInput name="title" />
        <CategoryCombobox name="category" />
        <Button className="w-full rounded" type="submit">
          Add Task
        </Button>
      </motion.form>
    </FormProvider>
  );
}
