import PREFECTURE_CITY_DATA from '../../data.json';

const PrefectureList = () => {
  const prefectureNameList = PREFECTURE_CITY_DATA.map((prefectureObj) => {
    const prefectureName = prefectureObj.name;
    const prefectureUrl = `/prefecture/${prefectureObj.en}`;
    const prefectureHtml = (
      <li className="mx-2 my-2" key={prefectureObj.id}>
        <a href={prefectureUrl}>{prefectureName}</a>
      </li>
    );
    return prefectureHtml;
  });

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">時計のある場所のリスト(場所別)</h2>
      <ul className="mt-6">{prefectureNameList}</ul>
    </section>
  );
};

export default PrefectureList;
