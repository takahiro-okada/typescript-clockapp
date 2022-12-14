import axios from 'axios';
import { useEffect, useState } from 'react';
import MakerAndCategoryCard from '../Organisms/MakerAndCategoryCard';

const MakerList = () => {
  const [makers, setMakers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/maker')
      .then((response) => setMakers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計のメーカーリスト</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        {makers.map((maker) => (
          <MakerAndCategoryCard maker={maker} imgUrl="/logo-citizen.png" />
        ))}
      </ul>
    </section>
  );
};
export default MakerList;
