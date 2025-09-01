export type Question = {
  id: string;
  label: string;
  type: "text" | "date" | "select";
  options?: string[];
};