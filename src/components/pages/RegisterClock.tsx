import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapWithSearch from '../Organisms/MapWithSearch';
import Maker from '../../types/Maker';

const RegisterClock = () => {
  const apiKey = 'AIzaSyCYazbx4_m_eYhyIB6oNWgi1iX4p4pVOtk';

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [makerId, setMakerId] = useState<number | null>(null);
  const [makers, setMakers] = useState<Maker[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const onPlaceSelected = (place: google.maps.places.PlaceResult) => {
    setSelectedPlace(place);
  };

  useEffect(() => {
    const fetchMakers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/makers');
        setMakers(response.data);
      } catch (error) {
        console.error('Error fetching makers:', error);
      }
    };

    fetchMakers();
  }, []);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('maker_id', makerId?.toString() || '');

    if (file) {
      formData.append('image', file);
    }

    if (selectedPlace && selectedPlace.geometry && selectedPlace.geometry.location) {
      formData.append('latitude', selectedPlace.geometry.location.lat().toString());
      formData.append('longitude', selectedPlace.geometry.location.lng().toString());
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="mt-9 text-left max-w-screen-md mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計を登録する</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="maker" className="text-xl mt-5 block">
          メーカーを選択する
          <select
            id="maker"
            onChange={(e) => setMakerId(Number(e.target.value))}
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
          >
            <option value="">--メーカーを選択--</option>

            {makers.map((maker: Maker) => (
              <option key={maker.id} value={maker.id}>
                {maker.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="name" className="text-xl mt-5 block">
          時計の名前
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
          />
        </label>
        <label htmlFor="description" className="text-xl mt-5 block">
          時計の説明
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
          />
        </label>
        <label htmlFor="image" className="text-xl mt-5 block">
          画像
          <input
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="mt-3 block"
          />
        </label>

        <MapWithSearch apiKey={apiKey} onPlaceSelected={onPlaceSelected} />

        <div className="mt-6 text-center">
          <button
            className="bg-orange-600 px-12 py-3 text-2xl bg-gradient-to-r from-[#FFB347] to-[#FFCC33] rounded-xl"
            type="submit"
          >
            送信する
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterClock;
