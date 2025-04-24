import React, { useState } from "react";

interface Props {
  onSubmit: (plate: string) => void;
}

const PlateForm: React.FC<Props> = ({ onSubmit }) => {
  const [part1, setPart1] = useState("");
  const [letter, setLetter] = useState("ب");
  const [part2, setPart2] = useState("");
  const [city, setCity] = useState("");

  const letters = ["ب", "ج", "د", "س", "ص", "ط", "ق", "ل", "م", "ن", "و", "ه", "ی"];

  const handleSubmit = () => {
    if (part1 && part2 && city) {
      const fullPlate = `${part1}${letter}${part2}${city}`;
      onSubmit(fullPlate);
      setPart1("");
      setPart2("");
      setCity("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-6" dir="rtl">
      <label className="text-lg font-bold">ورود شماره پلاک</label>

      <div className="flex gap-2 border-4 border-black rounded-lg p-4 bg-white shadow text-xl font-bold">
        <input
          type="text"
          maxLength={2}
          className="w-12 text-center border border-gray-300 rounded"
          value={part1}
          onChange={(e) => setPart1(e.target.value)}
          placeholder="12"
        />
        <select
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          className="w-14 text-center border border-gray-300 rounded"
        >
          {letters.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <input
          type="text"
          maxLength={3}
          className="w-16 text-center border border-gray-300 rounded"
          value={part2}
          onChange={(e) => setPart2(e.target.value)}
          placeholder="365"
        />
        <input
          type="text"
          maxLength={2}
          className="w-12 text-center border border-gray-300 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="11"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded font-bold"
      >
        ثبت / خروج
      </button>
    </div>
  );
};

export default PlateForm;
