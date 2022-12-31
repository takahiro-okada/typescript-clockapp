import ClockCard from '../Organisms/ClockCard';

const ClockPlace = () => {
  console.log('hoge');

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">スモールワールドのある場所のリスト</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        <ClockCard imgUrl="/jpg-smallworld.jpg" />
        <ClockCard imgUrl="/jpg-smallworld.jpg" />
        <ClockCard imgUrl="/jpg-smallworld.jpg" />
        <ClockCard imgUrl="/jpg-smallworld.jpg" />
        <ClockCard imgUrl="/jpg-smallworld.jpg" />
      </ul>
    </section>
  );
};

export default ClockPlace;
