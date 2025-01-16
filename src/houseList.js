import { useState } from 'react';
const houseArray = [
  {
    id: 1,
    address: 'Hyderabad',
    country: 'India',
  },
  {
    id: 2,
    address: 'Bangalore',
    country: 'India',
  },
];
const HouseList = () => {
  const [houses, setHouses] = useState(houseArray);
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: 'Chennai',
        country: 'India',
      },
    ]);
  };
  return (
    <>
      <ol>
        {houses.map(house => (
          <li key={house.id}>{house.address}</li>
        ))}
      </ol>
      <button onClick={addHouse}>AddHouse</button>
    </>
  );
};

export default HouseList;
