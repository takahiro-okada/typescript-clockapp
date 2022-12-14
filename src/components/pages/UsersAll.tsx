const UsersAll = () => {
  console.log('hoge');
  return (
    <section className="mt-9 text-left container mx-auto px-3 py-6">
      <h2 className="font-bold text-3xl">ユーザー一覧</h2>
      <ul className="mt-6 max-w-xl list-inside">
        <li className="mt-3 flex justify-between">
          <span>山田花子</span>
          <button type="button" className="bg-red-500 text-white py-1 px-2 rounded-md">
            削除
          </button>
        </li>
        <li className="mt-3 flex justify-between">
          <span>田中太郎</span>
          <button type="button" className="bg-red-500 text-white py-1 px-2 rounded-md">
            削除
          </button>
        </li>
        <li className="mt-3 flex justify-between">
          <span>岡田元太</span>
          <button type="button" className="bg-red-500 text-white py-1 px-2 rounded-md">
            削除
          </button>
        </li>
      </ul>
    </section>
  );
};

export default UsersAll;
