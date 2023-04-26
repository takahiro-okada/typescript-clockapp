import axios from 'axios';
import { useEffect, useState } from 'react';
import Prefecture from '../../types/Prefecture';

const url = 'http://localhost:8080/prefectures';

const PrefectureList = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        const response = await axios.get(url);
        setPrefectures(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrefectures();
  }, []);

  const renderPrefectureListItem = (prefecture: Prefecture) => (
    <li className="mx-2 my-2" key={prefecture.prefectureId}>
      <a href={`/prefecture/${prefecture.prefectureEnName}`}>{prefecture.prefectureName}</a>
    </li>
  );

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計のある場所のリスト(場所別)</h2>
      <ul className="mt-6">{prefectures.map(renderPrefectureListItem)}</ul>
    </section>
  );
};

export default PrefectureList;
