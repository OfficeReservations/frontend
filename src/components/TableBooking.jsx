import { useState } from "react"
import { Table, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaCaretDown, FaCaretUp, FaTimes, FaRegSadTear } from "react-icons/fa";
import '../css/UpcomingBooking.css'


export default function TableBooking({ title, bookings }) {
    const [isVisible, setIsVisible] = useState(true);
    const [search, setSearch] = useState("");
    const [inputValue, setInputValue] = useState("");

    const filteredBookings = bookings.filter(
        (booking) =>
            booking.roomNumber.includes(search) ||
            booking.lessonNumber.includes(search) ||
            booking.date.includes(search)
    );

    const handleSearch = () => {
        setSearch(inputValue);
    }
    const handleClearSearch = () => {
        setInputValue("");
        setSearch("");
    }


    return (
        <div className="container mt-4 rounded shadow-sm">
            <div className="info-container d-flex align-items-center justify-content-between bg-light rounded mb-2">
                <div className="container-upcoming p-2">
                    <h5 className="upcomingText"> {title}</h5>
                </div>
                <Button
                    variant="link"
                    className="p-0 "
                    style={{ display: "flex",  
                        justifyContent: "center",
                        alignItems: "center",    
                        width: "40px",           
                        height: "60px" }}
                    onClick={() => setIsVisible(!isVisible)}
                >
                    {isVisible ? <FaCaretUp size={24} style={{ color: "rgb(22, 62, 115)" }} /> : <FaCaretDown size={24} style={{ color: "rgb(22, 62, 115)" }}/>}
                </Button>
            </div>
            {isVisible && (
                <>
                    <InputGroup className="mt-3 mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Поиск по номеру аудитории, паре или дате"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />

                        <InputGroup.Text onClick={handleSearch} style={{ cursor: "pointer" }}>
                            <FaSearch />
                        </InputGroup.Text>
                        {inputValue && (
                            <InputGroup.Text
                                onClick={handleClearSearch}
                                style={{ cursor: "pointer", color: "grey" }}
                            >
                                <FaTimes />
                            </InputGroup.Text>
                        )}
                    </InputGroup>
                    {filteredBookings.length === 0 ? (
                        <p style={{ textAlign: "center" }}>Ничего не найдено <FaRegSadTear /></p>
                    ) : (
                        <Table>

                            <thead>
                                <tr>
                                    <th>Номер аудитории</th>
                                    <th>Время</th>
                                    <th>Дата</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map((booking, index) => (
                                    <tr key={index}>
                                        <td>{booking.roomNumber}</td>
                                        <td>{booking.lessonNumber}</td>
                                        <td>{booking.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </>
            )}
        </div>
    )
}