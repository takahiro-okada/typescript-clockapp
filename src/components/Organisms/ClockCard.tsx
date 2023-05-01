/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../images/icon-heart.svg';
import usePrefectureFromLatLng from '../../hooks/usePrefectureFromLatLng';

const ClockCard = (props: any) => {
  const { clock } = props;
  const prefecture = usePrefectureFromLatLng(clock.latitude, clock.longitude);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { state: { selectedClock: { lat: clock.latitude, lng: clock.longitude } } });
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className="bg-white rounded-lg shadow-lg" onClick={handleClick}>
      <div className="relative">
        <img
          src={`http://localhost:8080/uploads/${clock.imagePath.split('/').pop()}`}
          alt="スモールワールド"
          className="w-full aspect-square rounded-t-lg object-cover"
        />
        <div className="absolute top-2 right-2">
          <HeartIcon />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-extrabold">{clock.name}</h3>
        <p className="mt-2 text-gray-500">{clock.description}</p>
        {prefecture && <p className="mt-2 text-gray-500">{prefecture}</p>}
      </div>
    </li>
  );
};
export default ClockCard;
