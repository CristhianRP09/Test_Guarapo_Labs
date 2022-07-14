import { useState } from "react";
import FilterMenuContext from "../../contexts/FilterMenuContext";

export default function FilterButton() {

    const [menu, setMenu] = useState(false);

    const showMenu = e => {
        setMenu(true);
    }

    return (
        <FilterMenuContext.Provider value={menu}>
            <div>
                <button className="block my-[12px] mx-auto w-[312px] h-[56px] bg-[#E3F2FD] rounded shadow-advancedOptionsShadow font-roboto text-[#2196F3] text-sm tracking-separation bg-[url('../public/img/filter_icon.svg')] bg-no-repeat bg-[left_21.7px_top_21px] small:w-[644px]">ADVANCED FILTERS</button>
            </div>
        </FilterMenuContext.Provider>
    )
}
