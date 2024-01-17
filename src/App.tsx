import { TodoInput } from './components/todo-input';
import { TodoList } from './components/todo-list';

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
