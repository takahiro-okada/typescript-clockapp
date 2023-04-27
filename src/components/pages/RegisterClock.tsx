import React, { useState } from 'react';
import axios from 'axios';
import MapWithSearch from '../Organisms/MapWithSearch';

const RegisterClock = () => {
  const apiKey = 'AIzaSyCYazbx4_m_eYhyIB6oNWgi1iX4p4pVOtk';

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [maker, setMaker] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const onPlaceSelected = (place: google.maps.places.PlaceResult) => {
    setSelectedPlace(place);
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('maker', maker);

    if (file) {
      formData.append('image', file);
    }

    if (selectedPlace && selectedPlace.geometry && selectedPlace.geometry.location) {
      formData.append('latitude', selectedPlace.geometry.location.lat().toString());
      formData.append('longitude', selectedPlace.geometry.location.lng().toString());
    }

    Array.from(formData.entries()).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

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
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計を登録する</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="latitude" className="text-xl mt-5 block">
          メーカーを選択する
          <input
            type="text"
            id="maker"
            onChange={(e) => setMaker(e.target.value)}
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
          />
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

        <p className="mt-3">
          選択肢に登録するメーカーが存在しない場合には
          <br />
          <a className="text-blue-400 font-bold px-1 text-xl" href="http://okalog.info">
            ここから
          </a>
          登録してください。
        </p>
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
