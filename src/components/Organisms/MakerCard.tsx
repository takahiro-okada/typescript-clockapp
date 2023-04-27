const MakerCard = (props: any) => {
  const { maker } = props;
  const url = `/makers/${maker.makerName}`;
  const imageUrl = `http://localhost:8080/uploads/${maker.makerImagePath.split('/').pop()}`; // 画像のファイル名を取得して、新しいURLを作成

  return (
    <li className="px-4 py-4 shadow-lg shadow-gray-300 rounded-2xl">
      <a href={url}>
        <h3 className="text-xl font-extrabold">{maker.makerName}</h3>
        <div className="mt-3">
          <img src={imageUrl} alt="スモールワールド" className="w-full aspect-square rounded-2xl object-contain" />
        </div>
      </a>
    </li>
  );
};
export default MakerCard;
