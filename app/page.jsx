"use client";
import { useState, useEffect } from "react";

import SideBar from "./components/Sidebar";
import JDHeader from "./components/JDHeader";
import SearchBar from "./components/SearchBar";
import ListContainer from "./components/ListContainer";

export default function Home() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  useEffect(() => {
  }, [searchKeyWord]);
  return (
    <section className="page-container w-full min-h-screen mx-auto">
      <SideBar />
      <div className="w-full lg:pl-[212px] border-r min-h-screen">
        <JDHeader />
        {/* <CardBase/> */}
        <SearchBar setSearchKeyWord={setSearchKeyWord} />
        <ListContainer searchKeyWord={searchKeyWord} />
      </div>
    </section>
  );
}
