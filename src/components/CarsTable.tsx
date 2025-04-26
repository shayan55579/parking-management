import React from "react";
import { Car } from "../types/Car";

const CarsTable: React.FC<{ cars: Car[] }> = ({ cars }) => {
  
  // Format plate nicely: part1 - letter - part2 = city 🇮🇷
  const formatPlate = (plate: string): string => {
    if (plate.length < 8) return plate; // fallback for safety
    const part1 = plate.slice(0, 2);
    const letter = plate.slice(2, 3);
    const part2 = plate.slice(3, 6);
    const city = plate.slice(6, 8);
    return `${part1} - ${letter} - ${part2} - ${city} 🇮🇷`;
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full text-right border-collapse rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="p-3 border">شماره پلاک</th>
            <th className="p-3 border">ورود</th>
            <th className="p-3 border">خروج</th>
            <th className="p-3 border">مدت</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, idx) => (
            <tr key={idx} className="even:bg-gray-100 odd:bg-white">
              <td className="p-3 border font-bold text-lg">
                <div className="inline-block bg-gray-100 rounded-md px-3 py-1">
                  {formatPlate(car.plate)}
                </div>
              </td>
              <td className="p-3 border">{car.entryTime}</td>
              <td className="p-3 border">{car.exitTime || "-"}</td>
              <td className="p-3 border">{car.duration || "در حال پارک"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsTable;
