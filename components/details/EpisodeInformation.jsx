import { useEffect, useState } from "react"

export default function EpisodeInformation({ url }) {

    const [state, setState] = useState({})

    const getEpisode = async (link) => {
        try {
            const res = await fetch(link);
            const data = await res.json();
            setState(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEpisode(url)
    }, [])

    return (
        <div className="relative pt-[9px] pl-[16px] w-[312px] medium:w-[370px] large:w-[413px] h-[88px]">
            <div className="font-roboto font-[700] text-[16px] text-[#081F32] tracking-[0.15px]">
                {state.episode}
            </div>
            <div className="font-roboto font-[400] text-[14px] text-[#6E798C] tracking-[0.25px]">
                {state.name}
            </div>
            <div className="mb-[9px] font-roboto font-[500] text-[10px] text-[#8E8E93] tracking-[1.5px] uppercase">
                {state.air_date}
            </div>
            <div className="border-b-[1px] border-b-[rgba(33, 33, 33, 0.08)]"></div>
        </div>
    )
}
