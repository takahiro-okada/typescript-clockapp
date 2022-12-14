import { useParams } from 'react-router-dom';
import MakerAndCategoryCard from '../Organisms/MakerAndCategoryCard';

const MakerDetails = () => {
  const { makername } = useParams();

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">時計のメーカーリスト</h2>
      <span className="text-2xl">{makername}</span>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        <MakerAndCategoryCard url="/makers/seiko/smallworld" name="スモールワールド" imgUrl="/jpg-smallworld.jpg" />
        <MakerAndCategoryCard url="/makers/seiko/symfony" name="シンフォニー" imgUrl="/jpg-symfony.jpg" />
        <MakerAndCategoryCard url="/makers/seiko/regaro" name="レガロ" imgUrl="/img-regaro.jpg" />
      </ul>
    </section>
  );
};

export default MakerDetails;
