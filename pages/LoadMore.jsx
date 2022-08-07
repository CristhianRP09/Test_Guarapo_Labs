import { useContext } from "react"
import { UrlFilterContext } from "../contexts/UrlFilterContext"

export default function LoadMore() {

    const { page, setPage } = useContext(UrlFilterContext);

    return (
        <button onClick={e => setPage(page + 1)} className="block relative mx-auto mt-[32px] medium:mt-[48px] w-[146px] medium:w-[154px] h-[36px] bg-[#F2F9FE] font-roboto font-medium text-[14px] tracking-[1.25px] text-[#2196F3] shadow-loadMoreShadow rounded-[4px]">
            LOAD MORE
        </button>
    )
}
