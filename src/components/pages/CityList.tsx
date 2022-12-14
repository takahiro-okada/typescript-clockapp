import { useParams } from 'react-router-dom';

const CityList = () => {
  const { prefecturename } = useParams();

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">
        時計のある場所のリスト
        {prefecturename}
      </h2>
    </section>
  );
};

export default CityList;
