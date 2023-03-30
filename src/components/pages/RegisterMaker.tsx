import React, { useState } from 'react';
import axios from 'axios';

const RegisterMaker = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const url = 'http://localhost:8080/api/makers';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        console.log('Maker registered successfully');
      } else {
        console.error('Error registering maker:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering maker:', error);
    }
  };

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">メーカーを登録する</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-xl mt-5 block">
          メーカーの名前
          <input
            type="text"
            id="name"
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="image" className="text-xl mt-5 block">
          画像
          <input type="file" id="image" className="mt-3 block" onChange={handleImageChange} />
        </label>
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

export default RegisterMaker;
