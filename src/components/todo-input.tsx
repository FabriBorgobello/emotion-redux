import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { addTask } from '@/slices/task.slice';

export function TodoInput() {
  const dispatch = useDispatch<AppDispatch>();

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      'task',
    ) as HTMLInputElement;
    if (!input.value) return;
    dispatch(addTask(input.value));
    input.value = '';
  }

  return (
    <form className="w-full max-w-md space-y-4" onSubmit={handleAddTask}>
      <div className="flex flex-col items-center">
        <Input
          className="rounded w-full mb-4"
          placeholder="Enter a task"
          type="text"
          name="task"
          required
        />
        <Button className="rounded w-full" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
}
