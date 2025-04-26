import React, { useState } from "react";
import { saveAs } from "file-saver";

// @ts-ignore
import moment from "moment-jalaali";
import { Car } from "../types/Car";

// Simulate loading data from database
const fakeCars: Car[] = [
  {
    id: 1,
    plate: "12ب36511",
    entryTime: "1403/02/01 14:00",
    exitTime: "1403/02/01 16:30",
    duration: "2 ساعت و 30 دقیقه",
    fee: "15000 تومان",
  },
  {
    id: 2,
    plate: "45د47821",
    entryTime: "1403/02/02 10:00",
    exitTime: null,
    duration: null,
    fee: undefined,
  }
];

const ReportPage: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDownload = () => {
    const start = moment(startDate, "jYYYY/jMM/jDD");
    const end = moment(endDate, "jYYYY/jMM/jDD").endOf("day");

    const filtered = fakeCars.filter(car => {
      const entry = moment(car.entryTime, "jYYYY/jMM/jDD HH:mm");
      return entry.isBetween(start, end, undefined, "[]");
    });

    const headers = ["پلاک", "زمان ورود", "زمان خروج", "مدت", "هزینه"];
    const rows = filtered.map(car => [
      car.plate,
      car.entryTime,
      car.exitTime || "-",
      car.duration || "در حال پارک",
      car.fee || "-"
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map(row => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    saveAs(encodedUri, "parking_report.csv");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">گزارش پارکینگ</h1>

      {/* Date Pickers */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
        <input
          type="text"
          placeholder="تاریخ شروع (مثلا 1403/02/01)"
          className="p-2 border rounded text-center"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="تاریخ پایان (مثلا 1403/02/02)"
          className="p-2 border rounded text-center"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded font-bold block mx-auto"
      >
        دانلود فایل CSV
      </button>
    </div>
  );
};

export default ReportPage;
