export interface Task {
  id: number;
  title: string;
  employeeName: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}