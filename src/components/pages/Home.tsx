import React from 'react';
import ClockMap from '../Organisms/ClockMap';

const Home = () => (
  <section className="container mx-auto mt-6 px-3">
    <h2 className="font-bold text-2xl">時計のある場所のリスト</h2>
    <div className="relative mt-8">
      <ClockMap />
    </div>
  </section>
);

export default Home;
