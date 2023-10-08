import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideBar() {
  const username = useSelector((state) => state.user.username);
  return (
    <>
      {username && (
        <aside className="mx-auto flex w-full flex-col items-center   sm:h-[50%]  sm:gap-5 md:w-auto ">
          <div className="flex w-full flex-col items-center bg-[#37003C] shadow-lg sm:px-4 sm:py-4 md:mr-5 md:w-auto md:rounded-xl">
            <div className=" mb-2 flex flex-col items-center gap-2 text-center text-white sm:mb-5">
              <span className=" w-3/4 border-white  p-1 text-lg font-semibold ">
                About me
              </span>
              <img
                src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/240521527_4374177845958670_230611608875898404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=QZ9MgyQMdMEAX864Sho&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCEz2w5hIaZxFl6XIjC0Voerp2ueaq_MJUNSRvFZw0d6g&oe=652399A1"
                alt="manchester united boy"
                className=" mt-2 w-1/2 rounded-xl sm:mt-4 sm:h-[250px] sm:w-[250px]"
              />
              <h1 className="text-3xl">{username}</h1>
              <p>Visitor</p>
            </div>

            <div className=" mb-2 w-3/4 text-center text-white sm:mb-5 ">
              <span className=" border-white text-lg font-semibold">
                Categories
              </span>
              <ul className=" mt-2 grid grid-cols-2 items-center gap-x-1 gap-y-4 sm:mt-5">
                <li className="cursor-pointer">Man United</li>
                <li className="cursor-pointer">Arsenal</li>
                <li className="cursor-pointer">Man City</li>
                <li className="cursor-pointer">Liverpool</li>
                <li className="cursor-pointer">Chelsea</li>
                <li className="cursor-pointer">Spurs</li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-10  sm:flex-col ">
              <div className="flex  w-3/4 items-center justify-center gap-4 text-white ">
                <a
                  className="duration-400 transition-all hover:text-red-500"
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
                  className="duration-400 transition-all hover:text-red-500"
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
                  <i className="fa-regular fa-user duration-400 text-2xl transition-all hover:text-red-500"></i>
                </a>
              </div>
            </div>
          </div>

          <button className=" w-full bg-[#6F0079] px-4 py-2 text-white transition-all duration-300 hover:bg-red-500 sm:w-auto sm:rounded-lg">
            <NavLink to="/write">Post your News</NavLink>
          </button>
        </aside>
      )}
    </>
  );
}

export default SideBar;
