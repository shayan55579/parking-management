// src/utils/date.ts
import moment from "moment-jalaali";

// Utility function to get the current Persian date and time
export const getPersianDate = (): string => {
  return moment().format("jYYYY/jMM/jDD HH:mm");
};
