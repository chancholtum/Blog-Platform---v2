import TopBar from "../component/TopBar";

function About({ handleThemeSwitch, theme }) {
  return (
    <>
      <TopBar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <section className=" bg-bkg-1 fixed top-10  h-screen w-screen transition-all duration-300">
        <div className=" mt-10 flex flex-col justify-center gap-10 px-4">
          <img
            src="me.jpg"
            alt="chanchol"
            className="animate-fade mx-auto w-4/5 rounded-xl transition-all duration-300 hover:-translate-y-2 sm:w-2/5 lg:w-1/5"
          />
          <div className="  text-text-1 flex flex-col items-center justify-center gap-2 text-center">
            <h1 className=" text-2xl">Chanchol Mukdatanachot</h1>

            <p className=" w-full font-light sm:w-2/5">
              I worked as a Business Development Engineer for 4 years. I'd like
              to do something that I'm interested in and challenge my talent.
              Yes! , that's right. It's coding. I've learned coding since April
              2023. I'd to be a full stack developer. I'm looking for a fontend
              developer job first. Many courses that I've learned from Jonas
              Schmedtmann from Udemy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
