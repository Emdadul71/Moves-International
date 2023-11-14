"use client";
// const targetDate = "09/26/2024";

import { useCountdown } from "@/hooks/use_count_down";
import moment from "moment";

interface propsTypes {
  targetDate?: any;
  customClasses?: any;
  targetEndDate?: any;
}

export const CountdownTimer = ({
  targetDate,
  customClasses,
  targetEndDate,
}: propsTypes) => {
  const [days, hours, minutes, seconds] = useCountdown(
    targetDate ?? new Date()
  );

  const [daysEnd, hoursEnd, minutesEnd, secondsEnd] = useCountdown(
    targetEndDate ?? new Date()
  );

  const completed =
    parseInt(days) + parseInt(hours) + parseInt(minutes) + parseInt(seconds) <=
    0;

  return (
    <ul
      className={` flex items-center justify-center gap-1 text-primary rounded-sm bg-white ${
        customClasses?.root ? customClasses?.root : ""
      }`}
    >
      <>
        <li
          className={`w-max ${
            customClasses?.counter_number ? customClasses?.counter_number : ""
          }`}
        >
          {moment(targetDate).format("Do")} {moment(targetDate).format("MMMM")}{" "}
          | {completed ? "Ends in :" : "Starts in :"}{" "}
        </li>
        <li>
          <div
            className={` ${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            {completed ? daysEnd : days}
          </div>
        </li>
        :
        <li>
          <div
            className={`${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            {completed ? hoursEnd : hours}
          </div>
        </li>
        :
        <li>
          <div
            className={`${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            {completed ? minutesEnd : minutes}
          </div>
        </li>
        :
        <li>
          <div
            className={`w-[20px] ${
              customClasses?.counter_number ? customClasses?.counter_number : ""
            }`}
          >
            {completed ? secondsEnd : seconds}
          </div>
        </li>
      </>
    </ul>
  );
};

export default CountdownTimer;
