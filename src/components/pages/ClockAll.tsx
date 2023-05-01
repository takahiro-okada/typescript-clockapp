import axios from 'axios';
import { useEffect, useState } from 'react';
import ClockCard from '../Organisms/ClockCard';

const ClockAll = () => {
  const [clocks, setClocks] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/clocks')
      .then((response) => {
        console.log(response.data);
        setClocks(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-9 text-left max-w-screen-md mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計のリスト</h2>
      <ul className="mt-6 grid grid-cols-3 gap-5">
        {clocks.map((clock) => (
          <ClockCard clock={clock} />
        ))}
      </ul>
    </section>
  );
};

export default ClockAll;
