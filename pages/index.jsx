import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UpperLayout from "../components/UpperLayout";
import SpecieMobile from "../components/selectInputs/selectInputsMobile/SpecieMobile";
import GenderMobile from "../components/selectInputs/selectInputsMobile/GenderMobile";
import StatusMobile from "../components/selectInputs/selectInputsMobile/StatusMobile";
import Image from "next/image";
import FilterByName from "../components/Search&Filter/FilterByName";
import Content from '../components/Content';
import { UrlFilterContext } from "../contexts/UrlFilterContext";
import FilterButton from "../components/Search&Filter/FilterButton";
import { AdvanceFilterMenuMobile } from "../contexts/AdvanceFilterMenuMobile";
import LoadMore from "./LoadMore";
import AdvancedFilter from "../components/Search&Filter/AdvancedFilterMobile";

export default function Home({ characters }) {

  const [chars, setChars] = useState(characters.results);
  const [maxPages, setMaxPages] = useState(characters.info.pages);

  const { menu, setMenu } = useContext(AdvanceFilterMenuMobile);

  const { urlBase, gender, name, status, page, setPage } = useContext(UrlFilterContext);
  let filter = `${gender}${name}${status}`;

  useEffect(() => {
    goToUrlFiltered(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  useEffect(() => {
    if (page > 1) {
      getMoreCharacters(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const getMoreCharacters = async (page) => {
    try {
      const res = await fetch(`${urlBase}?page=${page}${filter}`);
      const data = await res.json();
      setChars([...chars, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  }

  const goToUrlFiltered = async (filter) => {
    try {
      setPage(1);
      const res = await fetch(`${urlBase}?page=${page}${filter}`);
      const data = await res.json();
      setChars(data.results);
      setMaxPages(data.info.pages);
    } catch (error) {
      console.log(error);
    }
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
          <FilterButton />
        </div>

        {/* Content */}
        <Content characters={chars} />

        {/* Load More */}
        {page < maxPages && <LoadMore />}
      </main>

      {/* Advanced Filters Menu (square) in Mobile Version */}
      {menu && <AdvancedFilter /> }

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
    const characters = await res.json();
    return { props: { characters } }
  } catch (error) {
    console.log(error);
  }
}