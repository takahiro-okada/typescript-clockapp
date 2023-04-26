import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClockCard from '../Organisms/ClockCard';
import Clock from '../../types/Clock';

const ClockPlace = () => {
  const { prefecturename } = useParams();
  const { cityname } = useParams();

  const url = `http://localhost:8080/prefectures/${prefecturename}/${cityname}`;
  const [clocks, setClocks] = useState<Clock[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await axios.get(url);
        setClocks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrefectures();
  }, []);

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">
        時計のある場所リスト
        {cityname}
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        {clocks.map((clock: Clock) => (
          <ClockCard key={clock.cityId} clock={clock} />
        ))}
      </ul>
    </section>
  );
};

export default ClockPlace;
