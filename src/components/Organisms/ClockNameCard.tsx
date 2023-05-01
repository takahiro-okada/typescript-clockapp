const ClockNameCard = (props: any) => {
  const { maker, imgUrl } = props;

  const url = `/makers/${maker.makerName}`;
  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href={url}>
        <h3 className="text-xl font-extrabold">{maker.clockName}</h3>
        <div className="mt-3">
          <img src={imgUrl} alt="スモールワールド" className="w-full aspect-square rounded-2xl object-contain" />
        </div>
      </a>
    </li>
  );
};
export default ClockNameCard;
