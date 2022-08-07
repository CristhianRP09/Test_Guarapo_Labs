import { useContext } from "react";
import { AdvanceFilterMenuMobile } from "../../contexts/AdvanceFilterMenuMobile";

export default function FilterButton() {
    const { setMenu } = useContext(AdvanceFilterMenuMobile)

    return (
        <div>
            <button onClick={e => setMenu(true)} className="block mt-[16px] mx-auto w-[312px] h-[56px] bg-[#E3F2FD] rounded shadow-advancedOptionsShadow font-roboto text-[#2196F3] text-sm tracking-separation bg-[url('../public/img/filter_icon.svg')] bg-no-repeat bg-[left_21.7px_top_21px] small:w-[644px]">ADVANCED FILTERS</button>
        </div>
    )
}
