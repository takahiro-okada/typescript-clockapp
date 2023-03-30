const Home = () => (
  <section className="container mx-auto mt-6 px-3">
    <h2 className="font-bold text-2xl">時計のある場所のリスト</h2>
    <p className="font-bold mt-3">
      からくり時計や変わった時計の
      <br />
      ある場所を探すことができます
    </p>
    <div className="relative mt-8">
      <iframe
        className="mx-auto aspect-video max-w-full"
        title="googlemap"
        src="https://www.google.com/maps/d/embed?mid=1NpfzsTJvVZkOP-Lu3ycFh4xxzsv-mKM&ehbc=2E312F"
        width="640"
        height="480"
      />
    </div>
  </section>
);

export default Home;
