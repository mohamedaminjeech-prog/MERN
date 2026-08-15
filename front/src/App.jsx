import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Description from "./pages/Description";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarketGame from "./pages/MarketGame";
import MarketPs from "./pages/MarketPs";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import DescriptionPS from "./pages/DescriptionPS";
import { useDispatch, useSelector } from "react-redux";
import SuccessNotif from "./components/SuccessNotif";
import ErrorNotif from "./components/ErrorNotif";
import { useEffect } from "react";
import { currentUser } from "./JS/Actions/authActions";

const App = () => {
    const dispatch = useDispatch();
      const authSuccess = useSelector((state) => state.AuthReducer.success);
      const authErrors = useSelector((state) => state.AuthReducer.errors);

      const isAuth = useSelector((state) => state.AuthReducer.isAuth);
      useEffect(() => {
        if (localStorage.getItem("token")) {
          dispatch(currentUser());
        }
      }, [dispatch]);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute right-0 top-24 h-[26rem] w-[26rem] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <Navbar />
     { authSuccess && authSuccess.map((success) => (
      <SuccessNotif key={success.id} success={success} />
      )) }
      { authErrors && authErrors.map((error) => (
        <ErrorNotif key={error.id} error={error} />
      )) }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/MarketGame" element={<MarketGame />} />
        <Route path="/MarketPs" element={<MarketPs />} />
        <Route path="/Description/:id" element={<Description />} />
        <Route path="/DescriptionPS/:id" element={<DescriptionPS />} />
        <Route path="/contact" element={<Contact />} />
       { !isAuth && (
          <Route path="/login" element={<Login />} />
        ) }
       { !isAuth && (
          <Route path="/register" element={<Register />} />
        ) }
       { isAuth && (
          <Route path="/profile" element={<Profile />} />
        ) }
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
