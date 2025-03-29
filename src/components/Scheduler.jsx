import { useState, useEffect } from "react";
import { format, startOfWeek, addDays } from 'date-fns';
import '../css/Sheduler.css'
import RoomBooking from "./RoomBooking";

export default function Scheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const dates = Array.from({ length: 7 }).map((_, index) =>
    format(addDays(startOfWeekDate, index), 'yyyy-MM-dd')
  );

  const roomsData = [
    { date: '2025-03-01', time: '8:30 - 9:50', rooms: ['1234', '1564', '1345'] },
    { date: '2025-03-03', time: '8:30 - 9:50', rooms: ['202', '305'] },
    { date: '2025-03-03', time: '10:05 - 11:25', rooms: ['401', '402'] },
    { date: '2025-03-03', time: '11:40 - 13:00', rooms: ['501', '502', '503'] },
    { date: '2025-03-04', time: '8:30 - 9:50', rooms: ['601'] },
    { date: '2025-03-05', time: '15:20 - 16:40', rooms: ['701', '702', '703'] },
  ];

  useEffect(() => {
    const filteredRooms = roomsData.filter(
      (room) => room.date >= dates[0] && room.date <= dates[6]
    );
    setRooms(filteredRooms);
  }, [currentDate]);

  const times = ['8:30 - 9:50', '10:05 - 11:25', '11:40 - 13:00', '13:45 - 15:05', '15:20 - 16:40', '16:55 - 18:15', '18:30 - 19:50', '20:00 - 21:20'];

  const handleCellClick = (room) => {
    setSelectedRooms(room ? room.rooms : null);
  };

  const allRooms = Array.from(
    new Set(roomsData.flatMap(room => room.rooms))
  ).sort();

  return (
    <div className="scheduler-container">
      <div className="controls">
        <button onClick={() => setCurrentDate(addDays(currentDate, -7))} className="btn-prev-week">
          Предыдущая неделя
        </button>
        <span className="date-range">
          {format(startOfWeekDate, 'dd.MM.yyyy')} - {format(addDays(startOfWeekDate, 6), 'dd.MM.yyyy')}
        </span>
        <button onClick={() => setCurrentDate(addDays(currentDate, 7))} className="btn-next-week">
          Следующая неделя
        </button>
      </div>
      <div className="table-container">
        <table className="scheduler-table">
          <thead>
            <tr>
              <th className="empty-cell"></th>
              {dates.map((date, index) => (
                <th key={index} className="date-header">
                  {format(addDays(startOfWeekDate, index), 'dd/MM')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, timeIndex) => (
              <tr key={timeIndex}>
                <td className="time-cell">{time}</td>
                {dates.map((date, dateIndex) => {
                  const room = rooms.find(
                    (room) => room.date === date && room.time === time
                  );
                  return (
                    <td key={dateIndex} className="room-cell" onClick={() => handleCellClick(room)}>
                      {room ? room.rooms.length : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RoomBooking allRooms={allRooms} selectedRooms={selectedRooms} onClose={() => setSelectedRooms(null)} />
    </div>
  );
}
