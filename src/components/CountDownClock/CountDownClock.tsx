import Countdown from "react-countdown";
import { IDateStartCountDown } from "@interfaces/IDateStartCountDown";

const CountDownClock = (data: IDateStartCountDown) => {
  return (
    <Countdown
      autoStart={true}
      date={
        new Date(
          data.years,
          data.month - 1,
          data.days,
          data.hours,
          data.minutes,
          data.seconds,
          data.miliseconds
        )
      }
      renderer={renderer}
    />
  );
};

export default CountDownClock;

const Completionist = () => <span>End</span>;
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  const formatNumber24 = (num: number) => {
    if (num < 9) return "0" + num;
    else return num;
  };

  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="flex flex-row gap-8 text-2xl text-primary font-bold lg:text-4xl">
        <p>{formatNumber24(days)}</p>
        <p>:</p>
        <p>{formatNumber24(hours)}</p>
        <p>:</p>
        <p>{formatNumber24(minutes)}</p>
        <p>:</p>
        <p>{formatNumber24(seconds)}</p>
      </div>
    );
  }
};
