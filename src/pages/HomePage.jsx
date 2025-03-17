import { useState } from 'react';
import Scheduler from '../components/Scheduler';

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
  
    <div className="flex ">

      <aside className="w-64 mt-10 bg-state-100 text-blue-950 p-6 fixed h-9/12 top-16 overflow-y-auto rounded-r-lg border-2 border-solid border-gray-200  ">
        <div className="mb-4">
          <p
            className="cursor-pointer text-xl font-semibold"
            
          >
            Корпус
          </p>
          <button className="cursor-pointer"  
            onClick={() => setIsBuildingOpen((prev) => !prev)
            }
          >
            Выбрать корпус
          </button>
          {isBuildingOpen && (
            <div className="pl-4 mt-2">
              {buildings.map((building) => (
                <label key={building} className="block cursor-pointer text-sm appearance-none border-gray-300">
                  <input
                    type="checkbox"
                    value={building}
                    onChange={() => handleBuildingChange(building)}
                    checked={selectedBuildings.includes(building)}
                    className="mr-2 text-xl w-4 h-4 text-blue-950 bg-gray-100 border-gray-300 rounded-sm"
                  />
                  {building}
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4 ">
          <label className=" w-5 h-5 cursor-pointer text-xl appearance-none border-gray-300 rounded-md mr-2 hover:border-indigo-500">
            <input
              type="checkbox"
              checked={selectedRooms['Компьютерная аудитория']}
              onChange={() => handleRoomChange('Компьютерная аудитория')}
              className="mr-2 w-4 h-4 text-blue-950 bg-gray-100 border-gray-300 rounded-sm"
            />
            Компьютерная аудитория
          </label>
        </div>
        <div className="mb-4">
          <label className="cursor-pointer text-xl">
            <input
              type="checkbox"
              checked={selectedRooms['Лекционная аудитория']}
              onChange={() => handleRoomChange('Лекционная аудитория')}
              className="mr-2 w-4 h-4 text-blue-950 bg-gray-100 border-gray-300 rounded-sm"
            />
            Лекционная аудитория
          </label>
        </div>
      </aside>
      <main className='ml-110'>
        <Scheduler/>
      </main>
      
    </div>
    
  );
}