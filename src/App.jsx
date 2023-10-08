import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Single from "./pages/Single";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Write from "./pages/Write";
// import PageNotFound from "./pages/PageNotFound";
import SpinnerPage from "./pages/SpinnerPage";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Single = lazy(() => import("./pages/Single"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Write = lazy(() => import("./pages/Write"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const username = useSelector((state) => state.user.username);

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/post/:postId"
            element={username ? <Single /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={username ? <Home /> : <Register />}
          />
          <Route path="/write" element={username ? <Write /> : <Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
