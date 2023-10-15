import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy, useEffect, useState } from "react";

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
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "base");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerPage />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home handleThemeSwitch={handleThemeSwitch} theme={theme} />
            }
          />
          <Route
            path="/about"
            element={
              <About handleThemeSwitch={handleThemeSwitch} theme={theme} />
            }
          />
          <Route
            path="/post/:postId"
            element={
              username ? (
                <Single handleThemeSwitch={handleThemeSwitch} theme={theme} />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              username ? (
                <Home handleThemeSwitch={handleThemeSwitch} theme={theme} />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/write"
            element={
              username ? (
                <Write handleThemeSwitch={handleThemeSwitch} theme={theme} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="*"
            element={<PageNotFound handleThemeSwitch={handleThemeSwitch} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
