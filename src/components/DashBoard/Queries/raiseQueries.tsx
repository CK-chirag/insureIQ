import React, { useState } from "react";
import Button from "../../commonComp/Button";
import type { Question } from "../../commonComp/questionnaire/questions";
import QuestionnaireModal from "../../commonComp/questionnaire/QuestionnairePopup";

// ✅ Define Question type globally so both RaiseQuery & QuestionnaireModal can use it

// Component for raising a new query
export const RaiseQuery = () => {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<string>("");

  // Define questionnaires for each policy type
  const policyQuestions: Record<string, Question[]> = {
    "Travel Insurance": [
      { id: "travelReason", label: "What was the reason for travel?", type: "text" },
      { id: "queryType", label: "What is your query related to?", type: "select", options: ["Baggage", "Delay", "Others"] },
    ],
    "Health Insurance": [
      { id: "hospital", label: "Which hospital/clinic is this related to?", type: "text" },
      { id: "queryType", label: "What is your query about?", type: "select", options: ["Cashless Claim", "Reimbursement", "Coverage"] },
    ],
    "Life Insurance": [
      { id: "beneficiary", label: "Who is the query concerning?", type: "text" },
      { id: "queryType", label: "What aspect do you want to know about?", type: "select", options: ["Nominee", "Policy Terms", "Maturity"] },
    ],
  };

  const handlePolicySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPolicy(value);
    if (policyQuestions[value]) {
      setOpen(true);
    }
  };

  const handleSubmitAnswers = (answers: Record<string, string>) => {
    console.log("User query answers:", answers);
    // You can save this to state or send it to API
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Raise New Query</h2>
        <Button
          text={openForm ? "Close" : "New Query"}
          onClick={() => setOpenForm(!openForm)}
        />
      </div>

      {/* Expandable Form */}
      {openForm && (
        <div className="mt-6 space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Policy Type</label>
            <select
              className="w-full p-2 rounded-lg border-gray-400 border-1"
              onChange={handlePolicySelect}
            >
              <option>Select policy type</option>
              <option>Travel Insurance</option>
              <option>Health Insurance</option>
              <option>Life Insurance</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Query Details</label>
            <textarea
              className="w-full p-2 border-1 border-gray-800 rounded-lg"
              placeholder="Please describe your query..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-4">Upload Documents</label>
            <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center">
              <p className="text-sm text-gray-500">
                <span className="text-[#0055DE] font-medium">Upload a file </span>
                or drag and drop
                <br />
                PNG, JPG, PDF up to 10MB
              </p>
            </div>
          </div>
          <Button
            icon={
              <svg
                fill="currentColor"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 31.806 31.806"
                xmlSpace="preserve"
                className="w-4 h-4"
              >
                <g>
                  <g>
                    <path d="M1.286,12.465c-0.685,0.263-1.171,0.879-1.268,1.606c-0.096,0.728,0.213,1.449,0.806,1.88l6.492,4.724L30.374,2.534 L9.985,22.621l8.875,6.458c0.564,0.41,1.293,0.533,1.964,0.33c0.67-0.204,1.204-0.713,1.444-1.368l9.494-25.986 c0.096-0.264,0.028-0.559-0.172-0.756c-0.199-0.197-0.494-0.259-0.758-0.158L1.286,12.465z"></path>
                    <path d="M5.774,22.246l0.055,0.301l1.26,6.889c0.094,0.512,0.436,0.941,0.912,1.148c0.476,0.206,1.025,0.162,1.461-0.119 c1.755-1.132,4.047-2.634,3.985-2.722L5.774,22.246z"></path>
                  </g>
                </g>
              </svg>
            }
            className="w-full"
            text="Submit Query"
          />
        </div>
      )}

      {/* Modal usage */}
      {selectedPolicy && (
        <QuestionnaireModal
          title={`Additional Questions for ${selectedPolicy}`}
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmitAnswers}
          questions={policyQuestions[selectedPolicy] || []} // ✅ Correct typing now
        />
      )}
    </div>
  );
};
