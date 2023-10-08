import SideBar from "../component/SideBar"
import SinglePost from "../component/SinglePost"
import TopBar from "../component/TopBar"

function Single() {
  return (
    <>
    <TopBar/>
    <div className="flex mt-4 flex-col md:flex-row gap-5 md:gap-0">
      <SinglePost/>
      <SideBar/>
    </div>
    </>
  )
}

export default Single
