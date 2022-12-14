import { ReactComponent as HeartIcon } from '../../images/icon-heart.svg';

const ClockPlace = () => {
  console.log('hoge');

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl inline-block">スモールワールドのある場所のリスト</h2>
      <ul className="mt-6 grid grid-cols-2 gap-5">
        <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
          <h3>パワードーム</h3>
          <div className="">愛知県半田市</div>
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">Small World</div>
          <HeartIcon />
        </li>

        <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
          <h3>パワードーム</h3>
          <div className="">愛知県半田市</div>
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">Small World</div>
          <HeartIcon />
        </li>

        <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
          <h3>パワードーム</h3>
          <div className="">愛知県半田市</div>
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="">Small World</div>
          <HeartIcon />
        </li>
      </ul>
    </section>
  );
};

export default ClockPlace;
