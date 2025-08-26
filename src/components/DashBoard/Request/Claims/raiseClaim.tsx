import Button from "../../../commonComp/Button";

// Component for raising a new claim
export const RaiseClaim = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Raise a New Claim</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Policy Type</label>
        <select className="w-full p-2 rounded-lg border-gray-400 border-1">
          <option>Select policy type</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Company</label>
        <select className="w-full p-2 rounded-lg border-gray-400 border-1">
          <option>Select company</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Claim Details</label>
        <textarea className="w-full p-2 border-1 border-gray-800 rounded-lg" placeholder="Please describe the incident..."></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-4">Upload Documents</label>
        <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-500"><span className="text-[#0055DE] font-medium">Upload a file </span>or drag and drop<br/>PNG, JPG, PDF up to 10MB</p>
        </div>
      </div>
      <Button className="w-full" text="Submit Claim" />
    </div>
  );
};


