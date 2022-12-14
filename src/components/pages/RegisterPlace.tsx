const RegisterPlace = () => {
  console.log('a');

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">場所を登録する</h2>
      <div className="mt-6">
        <form action="">
          <label htmlFor="latitude" className="text-xl mt-5 block">
            時計のある場所を緯度
            <input
              type="text"
              id="latitude"
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            />
          </label>
          <label htmlFor="latitude" className="text-xl mt-5 block">
            時計のある場所の経度
            <input
              type="text"
              id="latitude"
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            />
          </label>
          <label htmlFor="latitude" className="text-xl mt-5 block">
            都道府県
            <input
              type="text"
              id="latitude"
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            />
          </label>
          <label htmlFor="latitude" className="text-xl mt-5 block">
            市町村区
            <input
              type="text"
              id="latitude"
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            />
          </label>
          <label htmlFor="latitude" className="text-xl mt-5 block">
            時計を選択する
            <input
              type="text"
              id="latitude"
              className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
            />
          </label>
          <p className="mt-3">
            選択肢に登録する時計が存在しない場合には
            <br />
            <a className="text-blue-400 font-bold px-1 text-xl" href="http://okalog.info">
              ここから
            </a>
            登録してください。
          </p>
          <div className="mt-6 text-center">
            <button
              className="bg-orange-600 px-12 py-3 text-2xl bg-gradient-to-r from-[#FFB347] to-[#FFCC33] rounded-xl"
              type="submit"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default RegisterPlace;
