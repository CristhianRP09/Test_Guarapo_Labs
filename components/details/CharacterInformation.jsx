export default function CharacterInformation(props) {
    return (
        <div className="relative pt-[9px] pl-[16px] w-[312px] medium:w-[370px] large:w-[413px] h-[64px]">
            <div className="font-roboto font-[700] text-[16px] text-[#081F32] tracking-[0.15px]">
                {props.attibute}
            </div>
            <div className="mb-[9px] font-roboto font-[400] text-[14px] text-[#6E798C] tracking-[0.25px]">
                {props.value == "" ? "unknown" : props.value}
            </div>
            <div className="border-b-[1px] border-b-[rgba(33, 33, 33, 0.08)]"></div>
        </div>
    )
}
