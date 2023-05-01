import React, { useState } from 'react';
import { ReactComponent as MapIcon } from '../../images/icon-map.svg';
import { ReactComponent as ClockIcon } from '../../images/icon-clock.svg';
import { ReactComponent as PostIcon } from '../../images/icon-post.svg';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-orange-600 px-3 py-3 text-2xl bg-gradient-to-r from-[#FFB347] to-[#FFCC33]">
      <div className="container mx-auto flex justify-between ">
        <h1>
          <a href="/">Where is Clock</a>
        </h1>

        <nav className="hidden sm:flex space-x-4">
          <a href="/" className="text-base flex items-center">
            <MapIcon />
            <span className="ml-2">マップ</span>
          </a>
          <a href="/register-clock" className="text-base flex items-center">
            <PostIcon />
            <span className="ml-2">新規投稿</span>
          </a>
          <a href="/all" className="text-base flex items-center">
            <ClockIcon />
            <span className="ml-2">時計一覧</span>
          </a>

          <a href="/all" className="text-base flex items-center">
            <span className="ml-2">ログイン</span>
          </a>
        </nav>

        <div className="sm:hidden">
          <button onClick={menuFunction} type="button" className="space-y-2">
            <div className="w-8 h-0.5 bg-gray-600" />
            <div className="w-8 h-0.5 bg-gray-600" />
            <div className="w-8 h-0.5 bg-gray-600" />
          </button>
        </div>

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
              <a href="/makers">メーカーから探す</a>
            </li>
            <li className="py-2 text-base">Googleアカウントでログイン</li>
          </ul>
          <ul>
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
      </div>
    </header>
  );
};

export default Header;
