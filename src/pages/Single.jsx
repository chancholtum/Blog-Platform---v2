import SideBar from "../component/SideBar";
import SinglePost from "../component/SinglePost";
import TopBar from "../component/TopBar";

function Single({ handleThemeSwitch, theme }) {
  return (
    <div className="bg-bkg-1 h-screen  transition-all duration-300">
      <TopBar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="bg-bkg-1 mt-4 flex h-auto flex-col gap-5 md:flex-row md:gap-0">
        <SinglePost />
        <SideBar />
      </div>
    </div>
  );
}

export default Single;
