import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";

import Single from "./pages/Single";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import PageNotFound from "./pages/PageNotFound";
import { lazy } from "react";
import About from "./pages/About";

// const Home = lazy(() => import('./pages/Home'))

function App() {
  const username = useSelector((state) => state.user.username);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/post/:postId"
          element={username ? <Single /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={username ? <Home /> : <Register />} />
        <Route path="/write" element={username ? <Write /> : <Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
