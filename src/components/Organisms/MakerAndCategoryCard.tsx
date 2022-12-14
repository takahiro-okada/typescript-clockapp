const MakerAndCategoryCard = (props: any) => {
  const { maker, imgUrl } = props;
  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href={maker.makerName}>
        <h3 className="text-xl font-extrabold">{maker.makerName}</h3>
        <div className="mt-3">
          <img src={imgUrl} alt="スモールワールド" className="w-full aspect-square rounded-2xl object-contain" />
        </div>
      </a>
    </li>
  );
};
export default MakerAndCategoryCard;
