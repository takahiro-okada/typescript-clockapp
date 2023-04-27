import React, { useState } from 'react';
import PREFECTURE_CITY_DATA from '../../data.json';
import IconArrowRight from '../Atoms/IconArrowRight';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openPlace, setOpenPlace] = useState(false);

  const [openCity, setOpenCity] = useState<IsOpenPrefecture>({ 0: false });
  type IsOpenPrefecture = {
    [prefectureNum: string]: boolean;
  };

  const searchBarFunction = () => {
    setOpenSearchBar(!openSearchBar);
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
      <div className="p-1">
        <button type="button" className="inline-block">
          {prefectureName}
        </button>
        <button
          type="button"
          onClick={() => handlePrefectureOpen(index)}
          data-id={index}
          className="inline-block ml-3 align-bottom"
        >
          {openCity[index] ? (
            <IconArrowRight arrowDirection="rotate-90" />
          ) : (
            <IconArrowRight arrowDirection="rotate-90" />
          )}
        </button>
        {openCity[index] ? <ul className="ml-5">{city}</ul> : undefined}
      </div>
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

        <nav
          className={
            openMenu
              ? 'text-left fixed bg-slate-50 left-0 top-0 w-11/12 h-screen z-10 flex flex-col justify-start pt-8 px-3 ease-linear duration-300'
              : 'fixed left-[-100%] ease-linear duration-300'
          }
        >
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
              <a href="/prefecture" className="inline-block">
                場所別
              </a>
              <button
                type="button"
                onClick={handleOpenPlace}
                className="inline-block ml-3 align-bottom  ease-linear duration-300"
              >
                <IconArrowRight />
              </button>
              {openPlace ? <ul className="ml-3">{prefectureList}</ul> : undefined}
            </li>
            <li className="py-2 text-base">
              <a href="/makers">メーカーから探す</a>
            </li>
            <li className="py-2 text-base">Googleアカウントでログイン</li>
          </ul>
          <div className="mt-3 text-md">--管理者用--</div>
          <ul>
            <li className="py-2 text-base">
              絶対URLにできる
              <a href="./register-place">場所を登録する</a>
            </li>
            <li className="py-2 text-base">
              <a href="register-clock">時計を登録する</a>
            </li>
            <li className="py-2 text-base">
              <a href="register-maker">メーカを登録する</a>
            </li>
            <li className="py-2 text-base">
              <a href="users">ユーザー一覧</a>
            </li>
          </ul>
        </nav>
        {openSearchBar ? undefined : <h1>時計のあるところ</h1>}

        {/* Search Bar */}
        <div className="relative flex">
          {openSearchBar ? (
            <input type="search" className="inline-block ml-5 p-2 text-sm  border-gray-300 rounded-lg bg-gray-50" />
          ) : undefined}
          <button className="inline-block ml-2" type="button" onClick={searchBarFunction}>
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
