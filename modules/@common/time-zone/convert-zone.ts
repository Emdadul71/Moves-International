// AppointmentTimeSlots.tsx
import moment from "moment-timezone";
interface TimeSlot {
  label: string;
  value: string;
}

const convertTimeSlotsToUserTimeZone = (
  timeSlots: string[] = [],
  time_zone: any
): TimeSlot[] => {
  const fromTimeZone = time_zone ?? "Australia/Sydney";

  return timeSlots.map((timeSlot) => {
    const [startTime, endTime] = timeSlot.split(" - ");

    const startDateTime = moment(`2023-11-25T${startTime}:00`)
      .tz(fromTimeZone)
      ?.format();
    const endDateTime = moment(`2023-11-25T${endTime}:00`)
      .tz(fromTimeZone)
      ?.format();

    return {
      label: `${startDateTime.match(/T(\d{2}:\d{2})/)?.[1] || ""} - ${
        endDateTime.match(/T(\d{2}:\d{2})/)?.[1] || ""
      }`,
      value: timeSlot,
    };
  });
};

export default convertTimeSlotsToUserTimeZone;
