const RegisterMaker = () => {
  console.log('hoge');

  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">メーカーを登録する</h2>
      <form action="">
        <label htmlFor="latitude" className="text-xl mt-5 block">
          メーカーの名前
          <input
            type="text"
            id="latitude"
            className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 rounded-md"
          />
        </label>
        <label htmlFor="latitude" className="text-xl mt-5 block">
          画像
          <input type="file" id="latitude" className="mt-3 block" />
        </label>
        <div className="mt-6 text-center">
          <button
            className="bg-orange-600 px-12 py-3 text-2xl bg-gradient-to-r from-[#FFB347] to-[#FFCC33] rounded-xl"
            type="submit"
          >
            送信する
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterMaker;
