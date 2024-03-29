import { motion } from "framer-motion";

import { Button } from "./ui/button";
import { DeleteButton } from "./delete-button";

import { Badge } from "@/components/ui/badge";
import { capitalize } from "@/lib/utils";
import { removeTask, toggleTask } from "@/slices/task-slice";
import { AppDispatch } from "@/store";
import { Task } from "@/types";

interface TaskItemProps {
  task: Task;
  dispatch: AppDispatch;
}

export function TaskItem({ task, dispatch }: TaskItemProps) {
  return (
    <motion.li
      layout
      key={task.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: task.completed ? 0.5 : 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: -50 }}
      className="flex items-center rounded bg-white p-4 shadow"
    >
      <span className="relative flex items-center text-lg">
        <CompletedLine isCompleted={task.completed} />
        {task.title}
        <Badge className="ml-2">{capitalize(task.category)}</Badge>
      </span>
      <TaskItemActions task={task} dispatch={dispatch} />
    </motion.li>
  );
}

export function CompletedLine({ isCompleted }: { isCompleted: boolean }) {
  return (
    <motion.div
      className="absolute left-0 h-[1px] bg-slate-500"
      initial={{ width: 0 }}
      animate={{ width: isCompleted ? "100%" : "0%" }}
      transition={{ duration: 0.1 }}
    />
  );
}

export function TaskItemActions({ task, dispatch }: TaskItemProps) {
  return (
    <div className="ml-auto flex items-center space-x-2">
      <Button
        size="sm"
        variant={"outline"}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleTask(task.id));
        }}
      >
        {task.completed ? "Undo" : "Done"}
      </Button>
      <DeleteButton
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          dispatch(removeTask(task.id));
        }}
      />
    </div>
  );
}
