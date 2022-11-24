import React, { useState } from 'react';
import PREFECTURE_CITY_DATA from '../../data.json';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openPlace, setOpenPlace] = useState(false);

  const [openCity, setOpenCity] = useState<ObjType>({ 0: false });
  type ObjType = {
    [key: string]: boolean;
  };

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  const handleOpenPlace = () => {
    setOpenPlace(!openPlace);
  };
  const handlePrefectureOpen = (id: number) => {
    setOpenCity((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const prefectureList = PREFECTURE_CITY_DATA.map((prefectureObject, index) => {
    const prefectureName = prefectureObject.name;
    const cityInfoObj = prefectureObject.city;
    const city = cityInfoObj.map((cityInfo) => {
      const cityName = cityInfo.city;
      return (
        <li className="px-1 py-1 inline-block bg-yellow-200 mx-1 my-1 rounded-lg">
          {cityName}
          (2)
        </li>
      );
    });

    return (
      <>
        <button type="button" onClick={() => handlePrefectureOpen(index)} className="block" data-id={index}>
          {prefectureName}
        </button>
        {openCity[index] ? <ul className="ml-5">{city}</ul> : undefined}
      </>
    );
  });

  return (
    <header className="bg-orange-600 px-3 py-3 text-2xl bg-gradient-to-r from-[#FFB347] to-[#FFCC33]">
      <div className="container mx-auto flex justify-between ">
        <button onClick={menuFunction} type="button" className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600" />
          <div className="w-8 h-0.5 bg-gray-600" />
          <div className="w-8 h-0.5 bg-gray-600" />
        </button>
        {openMenu ? (
          <nav className="overflow-y-auto text-left absolute bg-slate-50 left-0 top-0 height w-11/12 h-screen z-10 flex flex-col justify-start pt-8 px-3">
            <button
              onClick={menuFunction}
              type="button"
              className="absolute right-0 top-0 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul>
              <li className="py-2 text-base">
                <button type="button" onClick={handleOpenPlace}>
                  場所別
                </button>
                {openPlace ? <ul className="ml-3">{prefectureList}</ul> : undefined}
              </li>
              <li className="py-2 text-base">メーカーから探す</li>
              <li className="py-2 text-base">Googleアカウントで蝋印</li>
            </ul>
            <div className="mt-3 text-md">--管理者用--</div>
            <ul>
              <li className="py-2 text-base">場所を登録する</li>
              <li className="py-2 text-base">時計を登録する</li>
              <li className="py-2 text-base">メーカを登録する</li>
              <li className="py-2 text-base">ユーザー一覧</li>
            </ul>
          </nav>
        ) : undefined}
        <h1>時計のあるところ</h1>
        <div className="relative">
          <button type="submit">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
