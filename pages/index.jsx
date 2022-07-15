import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpperLayout from "../components/UpperLayout";
import SpecieMobile from "../components/selectInputs/selectInputsMobile/SpecieMobile";
import GenderMobile from "../components/selectInputs/selectInputsMobile/GenderMobile";
import StatusMobile from "../components/selectInputs/selectInputsMobile/StatusMobile";
import Image from "next/image";
import FilterByName from "../components/Search&Filter/FilterByName";
import { Content } from "../components/Content";

export default function Home({ characters }) {

  const { results } = characters;

  const [menu, setMenu] = useState(false);

  const openMenu = e => {
    setMenu(true);
  }

  const closeMenu = e => {
    setMenu(false);
  }

  return (
    <div className="relative min-w-[360px] w-[100vw] min-h-[100vh] h-fit bg-white overflow-x-hidden">
      <Header />

      <main className="relative m-0 pt-[32px] medium:pt-[26px] pb-[16px] medium:pb-[44px]">
        {/* Logo, Search & Filters for Desktop Version */}
        <UpperLayout />

        {/* Search & Filter Mobile Version */}
        <div className="relative mx-auto w-[312px] small:w-[644px] mt-[32px] medium:hidden">
          {/* Filter by name */}
          <FilterByName />

          {/* Advanced Filters Buttton in Mobile Version */}
          <div>
            <button onClick={openMenu} className="block mt-[16px] mx-auto w-[312px] h-[56px] bg-[#E3F2FD] rounded shadow-advancedOptionsShadow font-roboto text-[#2196F3] text-sm tracking-separation bg-[url('../public/img/filter_icon.svg')] bg-no-repeat bg-[left_21.7px_top_21px] small:w-[644px]">ADVANCED FILTERS</button>
          </div>
        </div>

        {/* Content */}
        <Content ch={results} />

        {/* Load More */}
        <button className="block relative mx-auto mt-[32px] medium:mt-[48px] w-[146px] medium:w-[154px] h-[36px] bg-[#F2F9FE] font-roboto font-medium text-[14px] tracking-[1.25px] text-[#2196F3] shadow-loadMoreShadow rounded-[4px]">
          LOAD MORE
        </button>
      </main>

      {/* Advanced Filters Menu (square) in Mobile Version */}
      {menu &&
        <div id="filterMenu" className="fixed top-[0px] left-[0px] w-[100vw] h-[100vh] bg-black bg-opacity-50 z-20">
          <div className="relative w-[312px] h-[350px] bg-white mx-auto mt-[110px] rounded-[4px] shadow-advancedMenuShadow small:w-[450px]">
            <div className="absolute w-[280px] h-[30px] left-[16px] top-[16px] font-roboto font-medium text-[20px] tracking-[0.15px]">Filters</div>

            <div onClick={closeMenu} className="absolute top-[24px] right-[21px] hover:cursor-pointer">
              <div className="flex justify-center items-center">
                <Image
                  alt="close icon"
                  src="/img/close_icon.svg"
                  width={14}
                  height={14}
                  priority={true}
                />
              </div>
            </div>

            <div className="absolute w-[280.6px] h-[200px] top-[62px] left-[0px] right-[0px] mx-auto flex flex-col justify-between items-center ">
              {/* Select inputs for filters Mobile Version */}
              <SpecieMobile />
              <GenderMobile />
              <StatusMobile />
            </div>

            <div className="absolute w-[281px] mx-auto left-[0px] right-[0px] bottom-[19px]">
              <button className="w-[281px] h-[36px] bg-[#E3F2FD] font-roboto font-medium text-[14px] tracking-[1.25px] text-[#2196F3] shadow-applyButtonAdvancedFilter rounded-[4px]">
                APPLY
              </button>
            </div>

          </div>
        </div>
      }

      <Footer />
    </div>

  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/`);
    const characters = await res.json();
    return { props: { characters } }
  } catch (error) {
    console.log(error);
  }
}