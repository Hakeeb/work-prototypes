// Mock data for the example prototype
export interface DataPoint {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const mockData: DataPoint[] = [
  { id: "1", label: "Design", value: 85, color: "#3b82f6" },
  { id: "2", label: "Development", value: 92, color: "#8b5cf6" },
  { id: "3", label: "Testing", value: 78, color: "#ec4899" },
  { id: "4", label: "Deployment", value: 88, color: "#10b981" },
];
