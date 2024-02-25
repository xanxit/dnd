import Image from "next/image";
import SideBar from "./components/Sidebar"
import JDHeader from "./components/JDHeader"
import CardBase from "./components/CardBase"
import SearchBar from "./components/SearchBar"
import ListContainer from "./components/ListContainer"

export default function Home() {
  return (
    <section className="page-container w-full min-h-screen mx-auto">
      <SideBar/>
      <div className="w-full lg:pl-[212px] border-r min-h-screen">
        <JDHeader/>
        {/* <CardBase/> */}
        <SearchBar/>
        <ListContainer/>
      </div>
    </section>
  );
}
