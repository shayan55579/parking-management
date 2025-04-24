import React from "react";
import { Car } from "../types/Car";

const CarsTable: React.FC<{ cars: Car[] }> = ({ cars }) => {
  return (
    <table className="w-full border text-right shadow-lg">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 border">شماره پلاک</th>
          <th className="p-3 border">ورود</th>
          <th className="p-3 border">خروج</th>
          <th className="p-3 border">مدت</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, idx) => (
          <tr key={idx} className="bg-white">
            <td className="p-2 border">{car.plate}</td>
            <td className="p-2 border">{car.entryTime}</td>
            <td className="p-2 border">{car.exitTime || "-"}</td>
            <td className="p-2 border">{car.duration || "در حال پارک"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarsTable;
