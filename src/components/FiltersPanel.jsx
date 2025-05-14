import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function FiltersPanel({
    buildings,
    selectedBuildings,
    onBuildingChange,
    selectedRooms,
    onRoomChange
}) {
    const [isBuildingOpen, setIsBuildingOpen] = useState(false);

    return (
        <div className="text-primary p-4 border border-gray-200 rounded-end overflow-auto mt-4 shadow-sm">
            <div className="dropdown">
                <div className='btn_arrow' onClick={() => setIsBuildingOpen(prev => !prev)}>
                    <button className="btn-building">
                        Корпус
                    </button>
                    {isBuildingOpen ?
                        <FaCaretUp size={24} style={{ color: "rgb(22, 62, 115)" }} /> :
                        <FaCaretDown size={24} style={{ color: "rgb(22, 62, 115)" }} />
                    }
                </div>
                {isBuildingOpen && (
                    <div className="dropdown_menu">
                        {buildings.map((building, index) => (
                            <div key={building} className="form-check">
                                <input
                                    type="checkbox"
                                    value={building}
                                    onChange={() => onBuildingChange(building)}
                                    checked={selectedBuildings.includes(building)}
                                    className="form-check-input"
                                    id={`building-${index}`}
                                />
                                <label htmlFor={`building-${index}`} className="form-check-label cursor-pointer">
                                    {building}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mb-4">
                <div className="form-check">
                    <input
                        type="checkbox"
                        checked={selectedRooms['Компьютерная аудитория']}
                        onChange={() => onRoomChange('Компьютерная аудитория')}
                        className="form-check-input cursor-pointer"
                        id="pcRoom"
                    />
                    <label htmlFor="pcRoom" className="form-check-label cursor-pointer">
                        Компьютерная аудитория
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <div className="form-check">
                    <input
                        type="checkbox"
                        checked={selectedRooms['Лекционная аудитория']}
                        onChange={() => onRoomChange('Лекционная аудитория')}
                        className="form-check-input cursor-pointer"
                        id="lectureRoom"
                    />
                    <label htmlFor="lectureRoom" className="form-check-label cursor-pointer">
                        Лекционная аудитория
                    </label>
                </div>
            </div>
        </div>
    )
}