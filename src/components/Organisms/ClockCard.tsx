import { ReactComponent as HeartIcon } from '../../images/icon-heart.svg';

const ClockCard = (props: any) => {
  const { imgUrl } = props;
  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href="http://hoge">
        <h3>パワードーム</h3>
        <div className="">愛知県半田市</div>
        <div className="mt-3">
          <img src={imgUrl} alt="" className="w-full aspect-square rounded-2xl object-contain" />
        </div>
        <div className="mt-3">Small World</div>
        <div className="text-right z-10">
          <button type="button">
            <HeartIcon />
          </button>
        </div>
      </a>
    </li>
  );
};
export default ClockCard;
