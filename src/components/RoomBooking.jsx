import '../css/RoomBooking.css'
import { useRef, useEffect } from 'react';
export default function RoomBooking({ roomsData, selectedRooms, onClose }) {

    const listRef = useRef(null);
    const isFiltered = Boolean(selectedRooms);
    const allRoomDetails = [];
    roomsData.forEach(({ date, time, rooms }) => {
        rooms.forEach((roomNumber) => {
            allRoomDetails.push({ roomNumber, date, time });
        });
    });

    const visibleRooms = isFiltered ? selectedRooms.rooms.map((roomNumber) => ({
        roomNumber,
        date: selectedRooms.date,
        time: selectedRooms.time
    }))
        : allRoomDetails;

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [selectedRooms])
    return (
        <div className="roomDetails" ref={listRef}>
            <div className="head-container">
                <h3>{selectedRooms ? "Свободные аудитории" : "Все аудитории"}</h3>
                {selectedRooms && (
                    <button onClick={onClose} className="btn-show ">
                        Показать все
                    </button>
                )}

            </div>
            <div className='roomBookingInfo'>
                <ul>
                    {visibleRooms.map(({ roomNumber, date, time }, index) => (
                        <li key={`${roomNumber}-${date}-${time}`}>
                            <div className="roomInfo">
                                <span><strong>Аудитория:</strong> {roomNumber}</span>
                                <span><strong>Дата:</strong> {date}</span>
                                <span><strong>Время:</strong> {time}</span>
                            </div>
                            <div className="btn-div">
                                <button className="btn-book">Забронировать</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}