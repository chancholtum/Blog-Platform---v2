import { useSelector } from "react-redux";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import TopBar from "../component/TopBar";
import Posts from "../posts/Posts";
import { getPosts } from "../Slice/postSlice";
import { useEffect, useState } from "react";

function Home({ handleThemeSwitch, theme }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("input");

  const posts = useSelector(getPosts);

  let sortedPosts;

  if (sortBy === "input") sortedPosts = posts;
  if (sortBy === "Ascending")
    sortedPosts = posts.slice().sort((a, b) => {
      return b.views - a.views;
    });
  if (sortBy === "Descending")
    sortedPosts = posts.slice().sort((a, b) => {
      return a.views - b.views;
    });
  function sortCat(team) {
    if (sortBy === team)
      sortedPosts = posts.filter((post) => post.categories.includes(team));

    return;
  }
  sortCat("Man United");
  sortCat("Arsenal");
  sortCat("Man City");
  sortCat("Liverpool");
  sortCat("Chelsea");
  sortCat("Spurs");

  const search =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.textInPost} ${post.author}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        )
      : sortedPosts;

  return (
    <div className="bg-bkg-1 transition-all duration-300">
      <TopBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleThemeSwitch={handleThemeSwitch}
        theme={theme}
      />
      <Header />
      <div className="animate-fadeInScroll posts mt-4 flex flex-wrap justify-center gap-4">
        <Posts search={search} searchQuery={search} sortedPosts={sortedPosts} />
        <SideBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
}

export default Home;
