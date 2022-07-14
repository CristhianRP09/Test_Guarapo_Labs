import SpecieDesktop from '../selectInputs/selectInputsDesktop/SpecieDesktop';
import GenderDesktop from '../selectInputs/selectInputsDesktop/GenderDesktop';
import StatusDesktop from '../selectInputs/selectInputsDesktop/StatusDesktop';

export default function AdvancedFilter() {
    return (
        <div className="w-[760px] h-[56px] my-[0px] mt-[16px] mx-auto flex flex-row justify-between items-center large:m-[0px]">
            <SpecieDesktop />
            <GenderDesktop />
            <StatusDesktop />
        </div>
    )
}
