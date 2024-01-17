import { TaskForm } from "./components/task-form";
import { TodoList } from "./components/todo-list";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <h1 className="mb-8 text-4xl font-bold">Welcome to Todo App</h1>
      <TaskForm />
      <TodoList />
    </div>
  );
}
