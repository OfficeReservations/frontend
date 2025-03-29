import '../css/ProfilePage.css'
import TableBooking from '../components/TableBooking';

export default function ProfilePage() {
    const totalBooked = 15;
    const upcomingBookingsCount = 5;
    const historyBookings = [
        { roomNumber: "101", lessonNumber: "11:40 - 13:00", date: "12.04.2024" },
        { roomNumber: "202", lessonNumber: "15:20 - 16:40", date: "15.04.2024" },
        { roomNumber: "305", lessonNumber: "8:30 - 9:50", date: "20.04.2024" },
    ];

    const upcomingBookings = [
        { roomNumber: "404", lessonNumber: "8:30 - 9:50", date: "30.04.2024" },
        { roomNumber: "502", lessonNumber: "11:40 - 13:00", date: "05.05.2024" },
    ];
    return (
        <div className="main-container ">
            <div className="info-box d-flex justify-content-between ">
                <div className="allBooking bg-white rounded shadow-sm">
                    <p className="all-text mb-0">
                        Все забронированные аудитории<br /> <span className="span-text">{totalBooked}</span>
                    </p>
                </div>
                <div className="upcomingBooking bg-white rounded shadow-sm">
                    <p className="upcoming-text mb-0">
                        Предстоящие брони<br /> <span className="span-text">{upcomingBookingsCount}</span>
                    </p>
                </div>
            </div>
            <TableBooking title="Предстоящие брони" bookings={upcomingBookings}/>
            <TableBooking title="История бронирования" bookings={historyBookings}/>
            

        </div>
    )
}