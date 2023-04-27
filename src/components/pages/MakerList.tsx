import axios from 'axios';
import { useEffect, useState } from 'react';
import MakerCard from '../Organisms/MakerCard';

const MakerList = () => {
  const [makers, setMakers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/makers')
      .then((response) => {
        console.log(response.data);
        setMakers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計のメーカーリスト</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        {makers.map((maker) => (
          <MakerCard maker={maker} />
        ))}
      </ul>
    </section>
  );
};
export default MakerList;
