import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateName } from "../Slice/userSlice";
import { getPosts } from "../Slice/postSlice";
import { useEffect, useState } from "react";

function TopBar({ searchQuery, setSearchQuery, handleThemeSwitch, theme }) {
  const posts = useSelector(getPosts);
  const username = useSelector((state) => state.user.username);
  const imageProfile = useSelector((state) => state.user.imageProfile);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(updateName(""));
  }

  return (
    <nav className="sticky top-0 z-[999] flex  h-12 w-full items-center justify-center bg-[#37003C] px-5 sm:justify-between">
      <div className="hidden items-center justify-center gap-3 text-xl text-white sm:flex">
        <a
          className="duration-400 animate-pulse transition-all hover:text-red-500"
          aria-label="linkedin"
          rel="noreferrer"
          target="_blank"
          href="http://www.linkedin.com/in/chanchol-mukdatanachot"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-brand-linkedin"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
        </a>
        <a
          className="duration-400 animate-pulse transition-all hover:text-red-500"
          aria-label="github"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/chancholtum"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-brand-github"
          >
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
        <a
          href="https://chanchol-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-user duration-400 animate-pulse text-xl transition-all hover:text-red-500"></i>
        </a>
      </div>

      <div className=" hidden sm:inline-block">
        <ul className=" hidden justify-center text-base text-white sm:flex sm:gap-2 md:gap-5 md:text-xl">
          <li className=" duration-400 cursor-pointer font-light uppercase transition-all hover:text-red-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" duration-400 cursor-pointer font-light  uppercase transition-all hover:text-red-500">
            <NavLink to="/about">About</NavLink>
          </li>

          <li
            className=" duration-400 cursor-pointer font-light  uppercase transition-all hover:text-red-500"
            onClick={handleLogout}
          >
            {username && <NavLink to="/">Logout</NavLink>}
          </li>
        </ul>
      </div>

      <div className=" flex items-center justify-end gap-5 sm:justify-center">
        {username ? (
          <div className="flex items-center justify-center gap-5">
            <span className="text-white md:text-sm">{username}</span>
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={imageProfile}
              alt="manchester united boy"
            />
          </div>
        ) : (
          <ul className="flex gap-5 text-lg text-white">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="hidden sm:inline-block">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        )}

        <div className="flex items-center justify-center gap-2 rounded-full border border-white bg-[#6f0079] px-4">
          <i className="fa-solid fa-magnifying-glass animate-beat text-lg text-white"></i>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-24 bg-inherit px-4 py-2 text-center text-sm  text-white outline-none transition-all    duration-300 xl:w-28"
          />
        </div>
        <button
          onClick={handleThemeSwitch}
          className=" text-white transition-all duration-300 hover:text-red-500"
        >
          {theme === "dark" ? (
            <i class="fa-regular fa-sun"></i>
          ) : (
            <i class="fa-regular fa-moon text-xl"></i>
          )}
        </button>
      </div>

      <div className="mx-4 flex flex-col gap-1 sm:hidden">
        <div className="h-1 w-6 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
        <div className="h-1 w-6 bg-white"></div>
      </div>

      {/* <div className="fixed w-full text-white sm:hidden">
        <ul className="flex gap-5 text-lg text-white">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="hidden sm:inline-block">
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default TopBar;
