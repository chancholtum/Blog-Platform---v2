import SideBar from "../component/SideBar"
import TopBar from "../component/TopBar"

function Settings() {
  return (
    <>
    <TopBar />
    <section className="settings flex mt-4">
      <div className="settingWrapper flex-[9] p-5">
        <div className="settingsTitle flex items-center justify-between">
          <span className="settingUpdateTitle text-3xl mb-5 text-[#4f1355]">Update your account</span>
          <span className="settingDeleteTitle text-red-500 text-lg cursor-pointer">Delete your account</span>
        </div>
        <form action="" className="settingsForm flex flex-col">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP flex items-center mt-2 gap-4">
            <img src="photo-01.jpg" alt="manchester unites boy" className="w-[70px] h-[70px] rounded-lg object-cover"/>
            <label htmlFor="fileInput">
            <i className="fa-regular fa-circle-user w-[25px] h-[25px] rounded-xl bg-[#37003C] flex items-center justify-center text-white cursor-pointer"></i>
            </label>
            <input type="file" id='fileInput' className="hidden"/>
          </div>

          <label className="text-xl mt-5">Username</label>
          <input type="text" placeholder="Chanchol" className= "text-stone-600 my-2 h-[30px] border-b-2 border-stone-300"/>

          <label className="text-xl mt-5">Email</label>
          <input type="Email" placeholder="chancholtum@gmail.com"  className= "text-stone-600 my-2 h-[30px] border-b-2 border-stone-300"/>

          <label className="text-xl mt-5" >Password</label>
          <input type="password" className= "text-stone-600 my-2 h-[30px] border-b-2 border-stone-300"/>

          <button className="settingsSubmit text-xl px-16 py-4 bg-[#37003C] rounded-full  self-center text-white	mt-5 cursor-pointer" >Update</button>

        </form>
      </div>
      <SideBar/>
    </section>
    </>
  )
}

export default Settings
