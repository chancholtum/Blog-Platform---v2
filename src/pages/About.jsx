import TopBar from "../component/TopBar";

function About() {
  return (
    <>
      <TopBar />
      <section className="fixed top-10 h-screen w-screen  bg-[#3e0044]">
        <div className="mt-10 flex flex-col justify-center gap-10 px-4">
          <img
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/265942067_4596889683687484_1777829221783430166_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=heYbP2H-enAAX_FK3Ss&_nc_ht=scontent.fbkk12-1.fna&oh=00_AfA8PTU5_yHJeHUf95tS3_2zVfCYpYIL2rFKkLe5qR5l1w&oe=6527C778"
            alt="chanchol"
            className="mx-auto w-4/5 rounded-xl transition-all duration-300 hover:-translate-y-2 sm:w-2/5 lg:w-1/5"
          />
          <div className=" flex flex-col items-center justify-center gap-2 text-center text-white">
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
