import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import RightAside from "../components/HomeLayout/RightAside";
import LeftAside from "../components/HomeLayout/LeftAside";
import Loading from "../pages/Loading";

const Home = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto py-5">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 gap-5 grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
