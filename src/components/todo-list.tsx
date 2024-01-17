import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { TaskItem } from './task-item';

export function TodoList() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch<AppDispatch>();

  if (!tasks.length) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[100px]">
        <p className="text-2xl">No tasks</p>
      </div>
    );
  }

  return (
    <ul className="w-full max-w-md mt-8 space-y-2 flex flex-col">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
