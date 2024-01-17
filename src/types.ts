export type Category = "work" | "shopping" | "hobby" | "other";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: Category;
}
