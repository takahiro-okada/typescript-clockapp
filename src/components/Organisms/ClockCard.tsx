import { ReactComponent as HeartIcon } from '../../images/icon-heart.svg';

const ClockCard = (props: any) => {
  const { clock } = props;

  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href="http://hoge">
        <div className="">{clock.address}</div>
        <div className="mt-3">
          <img src="" alt="" className="w-full aspect-square rounded-2xl object-contain" />
        </div>
        <div className="mt-3">{clock.clockName}</div>
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
