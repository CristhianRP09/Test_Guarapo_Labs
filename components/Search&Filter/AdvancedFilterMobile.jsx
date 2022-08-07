import Image from "next/image";
import { useContext } from "react";
import { AdvanceFilterMenuMobile } from "../../contexts/AdvanceFilterMenuMobile";
import GenderMobile from "../selectInputs/selectInputsMobile/GenderMobile";
import SpecieMobile from "../selectInputs/selectInputsMobile/SpecieMobile";
import StatusMobile from "../selectInputs/selectInputsMobile/StatusMobile";

export default function AdvancedFilter() {

    const { setMenu } = useContext(AdvanceFilterMenuMobile);

    return (
        <div id="filterMenu" className="fixed top-[0px] left-[0px] w-[100vw] h-[100vh] bg-black bg-opacity-50 z-20">
            <div className="relative w-[312px] h-[350px] bg-white mx-auto mt-[110px] rounded-[4px] shadow-advancedMenuShadow small:w-[450px]">
                <div className="absolute w-[280px] h-[30px] left-[16px] top-[16px] font-roboto font-medium text-[20px] tracking-[0.15px]">Filters</div>

                <div onClick={e => setMenu(false)} className="absolute top-[24px] right-[21px] hover:cursor-pointer">
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
    )
}
