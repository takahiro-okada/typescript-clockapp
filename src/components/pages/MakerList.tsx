import MakerAndCategoryCard from '../Organisms/MakerAndCategoryCard';

const MakerList = () => (
  <section className="mt-9 text-left container mx-auto px-3 py-6">
    <h2 className="font-bold text-3xl">時計のメーカーリスト</h2>
    <ul className="mt-6 grid grid-cols-2 gap-5">
      <MakerAndCategoryCard url="/makers/citizen" name="シティズン" imgUrl="/logo-citizen.png" />
      <MakerAndCategoryCard url="/makers/seiko" name="セイコー" imgUrl="/logo-seiko.jpeg" />
    </ul>
  </section>
);

export default MakerList;
