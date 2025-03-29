import { useState } from 'react';
import Scheduler from '../components/Scheduler';
import '../css/HomePage.css'
import { FaCaretDown, FaCaretUp} from "react-icons/fa";

const buildings = ['Корпус 1', 'Корпус 2', 'Корпус 3', 'Корпус 4'];
export default function HomePage(){
  const [selectedBuildings, setSelectedBuildings] = useState(buildings);
  const [selectedRooms, setSelectedRooms] = useState({
    'Компьютерная аудитория': true,
    'Лекционная аудитория': true,
  });
  const [isBuildingOpen, setIsBuildingOpen] = useState(false); 
  const handleBuildingChange = (building) => {
    setSelectedBuildings((prev) => {
      if (prev.includes(building)) {
        return prev.filter((item) => item !== building); 
      } else {
        return [...prev, building];
      }
    });
  };

const handleRoomChange = (roomType) => { 
    setSelectedRooms((prev) => ({
         ...prev,
         [roomType]: !prev[roomType],
     })); 
};

const filteredItems = { 
    buildings: buildings.filter((building) => selectedBuildings.includes(building) ),
    rooms: [ 
        {roomType: 'Компьютерная аудитория', isSelected: selectedRooms['Компьютерная аудитория'], }, 
        { roomType: 'Лекционная аудитория', isSelected: selectedRooms['Лекционная аудитория'], }, ] .filter(({ isSelected }) => isSelected) 
        .map(({ roomType }) => roomType), 
    };
console.log(filteredItems);
  return (
    <div className="home-container container-fluid">
      <div className="row">
        <aside className="col-2 text-primary p-4 border border-gray-200 rounded-end overflow-auto mt-4 shadow-sm" style={{ position: 'sticky', top: '16px', height: '75vh' }}>
          <div className="dropdown ">
            <div className='btn_arrow' onClick={() => setIsBuildingOpen((prev) => !prev)} >
              <button className="btn-building " >
                Корпус
              </button>
              {isBuildingOpen ? <FaCaretUp size={24} style={{ color: "rgb(22, 62, 115)" }} /> : <FaCaretDown size={24} style={{ color: "rgb(22, 62, 115)" }}/>}
            </div>
            {isBuildingOpen && (
              <div className="dropdown_menu">
                {buildings.map((building,index) => (
                  <div key={building} className="form-check">
                    <input
                      type="checkbox"
                      value={building}
                      onChange={() => handleBuildingChange(building)}
                      checked={selectedBuildings.includes(building)}
                      className="form-check-input"
                      id={`building-${index}`}
                    />
                    <label htmlFor={`building-${index}`} className="form-check-label cursor-pointer">{building}</label>
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
                onChange={() => handleRoomChange('Компьютерная аудитория')}
                className="form-check-input cursor-pointer"
                id="pcRoom"
              />
              <label htmlFor="pcRoom" className="form-check-label cursor-pointer">Компьютерная аудитория</label>
            </div>
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                checked={selectedRooms['Лекционная аудитория']}
                onChange={() => handleRoomChange('Лекционная аудитория')}
                className="form-check-input cursor-pointer"
                id="lectureRoom"
              />
              <label htmlFor="lectureRoom" className="form-check-label cursor-pointer">Лекционная аудитория</label>
            </div>
          </div>
        </aside>
        <main className="col-9 ms-2">
          <Scheduler />
        </main>
      </div>
    </div>
  );

}