import '../css/RoomBooking.css'
import { useRef, useEffect } from 'react';
export default function RoomBooking({ allRooms, selectedRooms, onClose }) {

    const listRef = useRef(null);
    const rooms = selectedRooms || allRooms;

    useEffect(() => {
        if(listRef.current){
                listRef.current.scrollIntoView({behavior: 'smooth'})
        }
    },[selectedRooms])
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
            <ul>
                {rooms.map((roomNumber) => (
                    <li key={roomNumber}>
                        Аудитория {roomNumber}
                        <div className='btn-div'>
                            <button className="btn-book ">Забронировать</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}