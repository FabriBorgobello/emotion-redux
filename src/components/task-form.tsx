import { Button } from '@/components/ui/button';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { addTask } from '@/slices/task-slice';
import { CategoryCombobox } from './category-combobox';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { TaskInputType, taskInputSchema } from '@/schemas/task-schema';
import { TaskInput } from './task-input';
import { CATEGORIES } from '@/constants';
import { motion } from 'framer-motion';

export function TaskForm() {
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<TaskInputType>({
    resolver: zodResolver(taskInputSchema),
    defaultValues: {
      category: CATEGORIES[0],
      title: '',
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
        className="space-y-4 w-full max-w-md"
      >
        <TaskInput name="title" />
        <CategoryCombobox name="category" />
        <Button className="rounded w-full" type="submit">
          Add Task
        </Button>
      </motion.form>
    </FormProvider>
  );
}
