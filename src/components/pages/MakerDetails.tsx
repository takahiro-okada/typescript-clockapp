import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClockNameCard from '../Organisms/ClockNameCard';

const MakerDetails = () => {
  const { makername } = useParams();
  const [makers, setMakers] = useState([]);
  const url = `http://localhost:8080/makers/${makername}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setMakers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">時計のメーカーリスト</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        {makers.map((maker) => (
          <ClockNameCard maker={maker} />
        ))}
      </ul>
    </section>
  );
};

export default MakerDetails;
