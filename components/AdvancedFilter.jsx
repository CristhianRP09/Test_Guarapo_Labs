import { useEffect, useState } from 'react';
import SpecieInput from './Specie';
import FilterButton from './FilterButton';
import Specie from './Specie';
import Gender from './Gender';
import Status from './Status';

export default function AdvancedFilter() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, [width])

    if (width < 940 && width > 0) {
        return (
            <FilterButton />
        )
    } else if (width === 0) {
        return (<div></div>)
    } else {
        return (
            <div className="w-[760px] h-[56px] my-[0px] mt-[16px] mx-auto flex flex-row justify-between items-center large:m-[0px]">
                <Specie />
                <Gender />
                <Status />
            </div>
        )
    }
}
