import React, { useState } from "react";
// @ts-ignore
import moment from "moment-jalaali";
import { Car } from "../types/Car";
import PlateForm from "./PlateForm";
import CarsTable from "./CarsTable";

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  // 📌 Calculate parking fee based on time (5000 toman per hour)
  const calculateFee = (minutes: number) => {
    const hours = Math.ceil(minutes / 60); // Round up
    return hours * 5000; // 5000 Toman per hour
  };

  // 📌 Handle new plate submit
  const handlePlateSubmit = (plate: string) => {
    const index = cars.findIndex(car => car.plate === plate && !car.exitTime);

    if (index !== -1) {
      const updatedCars = [...cars];
      const now = moment();
      const entry = moment(updatedCars[index].entryTime, "jYYYY/jMM/jDD HH:mm");
      const diff = moment.duration(now.diff(entry));
      const minutes = diff.asMinutes();
      const fee = calculateFee(minutes);

      updatedCars[index].exitTime = now.format("jYYYY/jMM/jDD HH:mm");
      updatedCars[index].duration = `${diff.hours()} ساعت و ${diff.minutes()} دقیقه`;
      updatedCars[index].fee = `${fee.toLocaleString()} تومان`;
      setCars(updatedCars);
    } else {
      const newCar: Car = {
        id: Date.now(),
        plate,
        entryTime: moment().format("jYYYY/jMM/jDD HH:mm"),
        exitTime: null,
        duration: null,
        fee: undefined,
      };
      setCars([newCar, ...cars]);
    }
  };

  // 📌 Handle exit by button
  const handleExit = (id: number) => {
    const updatedCars = cars.map(car => {
      if (car.id === id && !car.exitTime) {
        const now = moment();
        const entry = moment(car.entryTime, "jYYYY/jMM/jDD HH:mm");
        const diff = moment.duration(now.diff(entry));
        const minutes = diff.asMinutes();
        const fee = calculateFee(minutes);

        return {
          ...car,
          exitTime: now.format("jYYYY/jMM/jDD HH:mm"),
          duration: `${diff.hours()} ساعت و ${diff.minutes()} دقیقه`,
          fee: `${fee.toLocaleString()} تومان`
        };
      }
      return car;
    });
    setCars(updatedCars);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">سامانه مدیریت پارکینگ 🚗</h1>
      
      <PlateForm onSubmit={handlePlateSubmit} />
      
      <CarsTable cars={cars} onExit={handleExit} />
    </div>
  );
};

export default Dashboard;
