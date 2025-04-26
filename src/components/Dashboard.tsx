import React, { useState } from "react";
// @ts-ignore
import moment from "moment-jalaali";
import { Car } from "../types/Car";
import PlateForm from "./PlateForm";
import CarsTable from "./CarsTable";

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  const handlePlateSubmit = (plate: string) => {
    const index = cars.findIndex(car => car.plate === plate && !car.exitTime);

    if (index !== -1) {
      const updatedCars = [...cars];
      const now = moment();
      const entry = moment(updatedCars[index].entryTime, "jYYYY/jMM/jDD HH:mm");
      const diff = moment.duration(now.diff(entry));
      updatedCars[index].exitTime = now.format("jYYYY/jMM/jDD HH:mm");
      updatedCars[index].duration = `${diff.hours()} ساعت و ${diff.minutes()} دقیقه`;
      setCars(updatedCars);
    } else {
      const newCar: Car = {
        id: Date.now(), // Important: add id for each car!
        plate,
        entryTime: moment().format("jYYYY/jMM/jDD HH:mm"),
        exitTime: null,
        duration: null,
      };
      setCars([newCar, ...cars]);
    }
  };

  const handleExit = (id: number) => {
    const updatedCars = cars.map(car => {
      if (car.id === id && !car.exitTime) {
        const now = moment();
        const entry = moment(car.entryTime, "jYYYY/jMM/jDD HH:mm");
        const diff = moment.duration(now.diff(entry));
        return {
          ...car,
          exitTime: now.format("jYYYY/jMM/jDD HH:mm"),
          duration: `${diff.hours()} ساعت و ${diff.minutes()} دقیقه`
        };
      }
      return car;
    });
    setCars(updatedCars);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">سامانه مدیریت پارکینگ</h1>
      <PlateForm onSubmit={handlePlateSubmit} />
      <CarsTable cars={cars} onExit={handleExit} />
    </div>
  );
};

export default Dashboard;
