import React, { useState } from "react";
import Button from "../../commonComp/Button";
import type { Question } from "../../commonComp/questionnaire/questions";
import QuestionnaireModal from "../../commonComp/questionnaire/QuestionnairePopup";

export const RaiseClaim = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  const handlePolicySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedPolicy(value);
    if (value !== "Select policy type") {
      setOpenModal(true);
    }
  };

  const handleSubmitAnswers = (answers: Record<string, string>) => {
    console.log("User answers:", answers);
  };

  // Policy-specific questionnaires
  const policyQuestions: Record<string, Question[]> = {
    "Travel Insurance": [
      { id: "incidentDate", label: "When did the incident occur?", type: "date" },
      {
        id: "involvement",
        label: "Was anyone else involved?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
    "Health Insurance": [
      { id: "hospitalName", label: "Hospital Name", type: "text" },
      { id: "admissionDate", label: "Date of Admission", type: "date" },
    ],
    "Vehicle Insurance": [
      { id: "accidentLocation", label: "Accident Location", type: "text" },
      {
        id: "policeReport",
        label: "Was a police report filed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Raise New Claim</h2>
        <Button
          text={openForm ? "Close" : "New Claim"}
          onClick={() => setOpenForm(!openForm)}
        />
      </div>

      {/* Expandable Claim Form */}
      {openForm && (
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Policy Type</label>
            <select
              className="w-full p-2 rounded-lg border-gray-400 border"
              onChange={handlePolicySelect}
              defaultValue="Select policy type"
            >
              <option>Select policy type</option>
              <option>Travel Insurance</option>
              <option>Health Insurance</option>
              <option>Vehicle Insurance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Claim Details</label>
            <textarea
              className="w-full p-2 border rounded-lg"
              placeholder="Please describe the incident..."
            />
          </div>

          <div>
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

          <Button className="w-full" text="Submit Claim" />
        </div>
      )}

      {/* Modal */}
      <QuestionnaireModal
        title={`Additional Questions for ${selectedPolicy}`}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleSubmitAnswers}
        questions={policyQuestions[selectedPolicy] || []}
      />
    </div>
  );
};
