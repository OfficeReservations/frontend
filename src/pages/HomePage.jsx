import { useState } from 'react';
import Scheduler from '../components/Scheduler';
import FiltersPanel from '../components/FiltersPanel';
import '../css/HomePage.css'
import { FaCaretDown, FaCaretUp, FaFilter, FaTimes } from "react-icons/fa";

const buildings = ['Корпус 1', 'Корпус 2', 'Корпус 3', 'Корпус 4'];
export default function HomePage() {
  const [selectedBuildings, setSelectedBuildings] = useState(buildings);
  const [selectedRooms, setSelectedRooms] = useState({
    'Компьютерная аудитория': true,
    'Лекционная аудитория': true,
  });
  const [showFilters, setShowFilters] = useState(false);
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
    buildings: buildings.filter((building) => selectedBuildings.includes(building)),
    rooms: [
      { roomType: 'Компьютерная аудитория', isSelected: selectedRooms['Компьютерная аудитория'], },
      { roomType: 'Лекционная аудитория', isSelected: selectedRooms['Лекционная аудитория'], },].filter(({ isSelected }) => isSelected)
      .map(({ roomType }) => roomType),
  };
  console.log(filteredItems);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="home-container container-fluid">
      <div className="row">
        <div className="mobile-filters-btn d-lg-none">
          <button onClick={toggleFilters} className="btn btn-primary">
            {showFilters ? <FaTimes /> : <FaFilter />}
            <span>Фильтры</span>
          </button>
        </div>
        {showFilters && (
          <div className="mobile-filters-panel d-lg-none">
            <FiltersPanel
              buildings={buildings}
              selectedBuildings={selectedBuildings}
              onBuildingChange={handleBuildingChange}
              selectedRooms={selectedRooms}
              onRoomChange={handleRoomChange}
            />
          </div>
        )}
        <aside className="desktop-filters-panel col-lg-2 ${showFilters ? 'show' : ''}" >
          <FiltersPanel
            buildings={buildings}
            selectedBuildings={selectedBuildings}
            onBuildingChange={handleBuildingChange}
            selectedRooms={selectedRooms}
            onRoomChange={handleRoomChange}
          />
        </aside>
        
        
        <main className="col-12 col-sm-9 ms-sm-2 ">
          <Scheduler />
        </main>
      </div>
    </div>
  );

}