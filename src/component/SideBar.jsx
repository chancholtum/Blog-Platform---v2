import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getPosts } from "../Slice/postSlice";
import { useState } from "react";

function SideBar({ sortBy, setSortBy }) {
  const posts = useSelector(getPosts);
  const username = useSelector((state) => state.user.username);
  const imageProfile = useSelector((state) => state.user.imageProfile);

  const totalBlogs = posts.length;
  const totalViews = posts.reduce((acc, post) => acc + post.views, 0);

  const { postId } = useParams();

  // console.log(posts);

  function viewOfPost() {
    if (!postId) return;

    return posts.find((post) => post.id === postId).views;
  }

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      {username && (
        <aside className="mx-auto flex w-full flex-col items-center   sm:h-[50%]  sm:gap-5 md:w-auto ">
          <div className="bg-bkg-2 flex w-full flex-col items-center gap-3 shadow-lg transition-all duration-300 sm:px-4 sm:py-4 md:mr-5 md:w-auto md:rounded-xl">
            <div className=" text-text-2 mb-2 flex flex-col items-center gap-2 text-center sm:mb-3">
              <span className=" w-3/4 border-white  p-1 text-lg font-semibold ">
                About me
              </span>
              <img
                src={imageProfile}
                className=" mt-2 w-1/2 rounded-xl sm:mt-4 sm:h-[250px] sm:w-[250px]"
              />
              <h1 className="text-3xl">{username}</h1>
              <p>Visitor</p>
            </div>

            <div className="flex gap-2">
              <p className="text-text-2">Sort :</p>
              <select
                name="categories"
                id="categories"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="input">Options</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
                <option value="Man United">Man United</option>
                <option value="Arsenal">Arsenal</option>
                <option value="Man City">Man City</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Spurs">Spurs</option>
              </select>
            </div>

            <div className="flex items-center justify-center gap-10  sm:flex-col ">
              <div className="text-text-2  flex w-3/4 items-center justify-center gap-4 ">
                <a
                  className="duration-400 hover:text-text-1 animate-pulse transition-all"
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="http://www.linkedin.com/in/chanchol-mukdatanachot"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
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
                  className="duration-400 hover:text-text-1 animate-pulse transition-all"
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/chancholtum"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
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
                  <i className="fa-regular fa-user duration-400 hover:text-text-1 animate-pulse text-2xl transition-all"></i>
                </a>
              </div>
            </div>
          </div>

          <button className=" bg-bkg-2 w-full px-4 py-2 text-white transition-all duration-300 hover:bg-red-500 sm:w-auto sm:rounded-lg ">
            <NavLink to="/write">Post your News</NavLink>
          </button>
          {!postId ? (
            <div className="text-text-1 text-center">
              <p>Total Blogs : {totalBlogs} blogs</p>
              <p>Total Views : {numberWithCommas(totalViews)} views</p>
            </div>
          ) : (
            <div className="text-text-1 text-center transition-all duration-300">
              <p>Views : {numberWithCommas(viewOfPost())} views</p>
            </div>
          )}
        </aside>
      )}
    </>
  );
}

export default SideBar;
