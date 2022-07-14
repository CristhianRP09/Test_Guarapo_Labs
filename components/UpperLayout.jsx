import Logo from "../components/Logo";
import FilterByName from "../components/Search&Filter/FilterByName";
import SpecieDesktop from "../components/selectInputs/selectInputsDesktop/SpecieDesktop";
import GenderDesktop from "../components/selectInputs/selectInputsDesktop/GenderDesktop";
import StatusDesktop from "../components/selectInputs/selectInputsDesktop/StatusDesktop";

export default function UpperLayout() {

    return (
        <div>
            <Logo />

            {/* Search & Filter Desktop */}
            <div className="hidden relative mx-auto medium:w-[760px] large:w-[1020px] mt-[16px] medium:flex medium:flex-col justify-between large:flex-row">
                {/* Filter by name */}
                <FilterByName />

                {/* Select inputs for filters Desktop Version */}
                <div className="hidden medium:right-0 medium:mt-[16px] large:mt-0 medium:flex flex-row justify-between w-[760px] h-[56px]">
                    <SpecieDesktop />
                    <GenderDesktop />
                    <StatusDesktop />
                </div>
            </div>
        </div>
    )
}
