const MakerAndCategoryCard = (props: any) => {
  const { name, imgUrl, url } = props;
  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href={url}>
        <h3 className="text-xl font-extrabold">{name}</h3>
        <div className="">
          <img src={imgUrl} alt="スモールワールド" className="rounded-2xl" />
        </div>
      </a>
    </li>
  );
};
export default MakerAndCategoryCard;
