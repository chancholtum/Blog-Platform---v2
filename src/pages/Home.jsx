import Header from "../component/Header";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Posts from "../posts/Posts";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
