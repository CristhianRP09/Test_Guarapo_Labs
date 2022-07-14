import Logo from "../components/Logo";
import FilterByName from "../components/Search&Filter/FilterByName";
import Image from "next/image";
import SpecieDesktop from "../components/selectInputs/selectInputsDesktop/SpecieDesktop";
import GenderDesktop from "../components/selectInputs/selectInputsDesktop/GenderDesktop";
import StatusDesktop from "../components/selectInputs/selectInputsDesktop/StatusDesktop";
import SpecieMobile from "../components/selectInputs/selectInputsMobile/SpecieMobile";
import GenderMobile from "../components/selectInputs/selectInputsMobile/GenderMobile";
import StatusMobile from "../components/selectInputs/selectInputsMobile/StatusMobile";
import { useState } from "react";

export default function UpperLayout() {

    const [menu, setMenu] = useState(false);

    const openMenu = e => {
        setMenu(true)
    }

    const closeMenu = e => {
        setMenu(false)
    }

    return (
        <div>
            <Logo />

            {/* Search & Filter Mobile */}
            <div className="absolute top-[228px] small:top-[260px]  w-[312px] small:w-[644px] left-0 right-0 mx-auto medium:hidden">
                {/* Filter by name */}
                <FilterByName />

                {/* Advanced Filters Buttton in Mobile Version */}
                <div>
                    <button onClick={openMenu} className="block mt-[16px] mx-auto w-[312px] h-[56px] bg-[#E3F2FD] rounded shadow-advancedOptionsShadow font-roboto text-[#2196F3] text-sm tracking-separation bg-[url('../public/img/filter_icon.svg')] bg-no-repeat bg-[left_21.7px_top_21px] small:w-[644px]">ADVANCED FILTERS</button>
                </div>
            </div>

            {/* Search & Filter Desktop */}
            <div className="hidden absolute medium:top-[302px] medium:w-[760px] large:w-[1020px] left-0 right-0 mx-auto medium:flex medium:flex-col justify-between large:flex-row">
                {/* Filter by name */}
                <FilterByName />

                {/* Select inputs for filters Desktop Version */}
                <div className="hidden medium:right-0  medium:mt-[16px] large:mt-0 medium:flex flex-row justify-between w-[760px] h-[56px]">
                    <SpecieDesktop />
                    <GenderDesktop />
                    <StatusDesktop />
                </div>
            </div>

            {/* Advanced Filters menu (square) in Mobile Version */}
            {menu &&
                <div>
                    <div id="filterMenu" className="absolute top-[0px] left-[0px] w-[100vw] h-[100vh] bg-black bg-opacity-50 z-20">
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
                </div>
            }
        </div>
    )
}
