import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import City from '../../types/City';

const CityList = () => {
  const { prefecturename } = useParams();
  const url = `http://localhost:8080/prefecture/${prefecturename}`;
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await axios.get(url);
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrefectures();
  }, []);

  const renderCityiesListItem = (city: City) => (
    <li className="mx-2 my-2" key={city.cityId}>
      <a href={`/prefecture/${prefecturename}/${city.cityName}`}>{city.cityName}</a>
    </li>
  );

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">時計のある場所のリスト</h2>
      <ul className="mt-6">{cities.map(renderCityiesListItem)}</ul>
    </section>
  );
};

export default CityList;
