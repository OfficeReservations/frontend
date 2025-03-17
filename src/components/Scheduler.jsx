import { useState, useEffect } from "react";
import { format, startOfWeek, addDays } from 'date-fns';

export default function Scheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rooms, setRooms] = useState([]);
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const dates = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startOfWeekDate, index), 'yyyy-MM-dd')
  );

  useEffect(() => {
    const roomsData = [
      { date: '2025-03-01', time: '1 пара', room: '10' },
      { date: '2025-03-03', time: '1 пара', room: '10' },
      { date: '2025-03-03', time: '2 пара', room: '2' },
      { date: '2025-03-03', time: '3 пара', room: '5' },
      { date: '2025-03-04', time: '1 пара', room: '7' },
      { date: '2025-03-05', time: '5 пара', room: '13' },
    ];
    const filteredRooms = roomsData.filter(
      (room) => room.date >= dates[0] && room.date <= dates[6]
    );
    setRooms(filteredRooms);
  }, [currentDate]);

  const times = ['1 пара', '2 пара', '3 пара', '4 пара', '5 пара', '6 пара', '7 пара', '8 пара'];

  return (
    <div className="p-4 mt-22 ">
      <div className="mb-5 flex flex-row">
        <button onClick={() => setCurrentDate(addDays(currentDate, -7))} className="w-70 bg-white hover:bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded border-2 border-b-blue-900">
          Предыдущая неделя
        </button>
        <span className="mx-4 flex flex-row">
          {format(startOfWeekDate, 'dd.MM.yyyy')} - {format(addDays(startOfWeekDate, 6), 'dd.MM.yyyy')}
        </span>
        <button onClick={() => setCurrentDate(addDays(currentDate, 7))} className=" w-70 bg-white hover:bg-blue-100 text-blue-800 font-bold py-2 px-4 rounded border-2 border-b-blue-900">
          Следующая неделя
        </button>
      </div>
    <div className="relative flex flex-col w-full border-collapse border border-gray-300 h-full overflow-hidden text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="w-full">
            <thead>
            <tr>
                <th className="  p-2 "></th>
                {dates.map((date, index) => (
                <th key={index} className="border-b border-gray-300 p-4 text-xl  ">
                    {format(addDays(startOfWeekDate, index), 'dd/MM')}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {times.map((time, timeIndex) => (
                <tr key={timeIndex}>
                <td className="border border-gray-300 p-4 text-xl bg-zinc-50">{time}</td>
                {dates.map((date, dateIndex) => {
                    const room = rooms.find(
                    (room) => room.date === date && room.time === time
                    );
                    return (
                    <td key={dateIndex} className=" border-b border-gray-300  p-2 text-center text-xl  text-blue-950 bg-zinc-50">
                        {room ? room.room : ''}
                    </td>
                    );
                })}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </div>
  );
}