import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { TaskItem } from "./task-item";

export function TodoList() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch<AppDispatch>();

  if (!tasks.length) {
    return (
      <div className="mt-16 flex h-[100px] w-full max-w-md flex-col items-center justify-center rounded-md bg-gray-200">
        <p className="text-2xl">No tasks</p>
      </div>
    );
  }

  return (
    <ul className="mt-16 flex w-full max-w-md flex-col space-y-2">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} dispatch={dispatch} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
