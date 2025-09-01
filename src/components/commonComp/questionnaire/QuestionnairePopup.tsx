import React from "react";
import type { Question } from "./questions"; // ✅ single source of truth

interface QuestionnaireModalProps {
  title: string;
  questions: Question[];
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (answers: Record<string, string>) => void;
}

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  title,
  questions,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onSubmit(answers);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        {questions.map((q) => (
          <div className="mb-4" key={q.id}>
            <label className="block text-sm font-medium mb-1">{q.label}</label>
            {q.type === "text" && (
              <input
                type="text"
                className="w-full border rounded-md p-2"
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            )}
            {q.type === "date" && (
              <input
                type="date"
                className="w-full border rounded-md p-2"
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            )}
            {q.type === "select" && (
              <select
                className="w-full border rounded-md p-2"
                onChange={(e) => handleChange(q.id, e.target.value)}
              >
                <option value="">Select</option>
                {q.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireModal;
